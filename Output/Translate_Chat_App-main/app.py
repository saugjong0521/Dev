import eventlet
eventlet.monkey_patch()

from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
import openai
import os
import asyncio
import random

# Flask 및 Socket.IO 초기화
app = Flask(__name__)
socketio = SocketIO(app, async_mode='eventlet')

# OpenAI API 키 설정 (환경 변수에서 불러오기)
openai.api_key = os.getenv("OPENAI_API_KEY")

# 사용자별 비동기 작업 상태를 관리하는 딕셔너리
user_tasks = {}

# 사용자 세션 ID를 4자리 숫자로 매핑하는 딕셔너리
session_to_short_id = {}
used_short_ids = set()

# 4자리 숫자를 생성하는 함수
def generate_short_id():
    while True:
        short_id = random.randint(1000, 9999)
        if short_id not in used_short_ids:  # 고유한 ID인지 확인
            used_short_ids.add(short_id)
            return short_id

@socketio.on('connect')
def assign_user_id():
    user_id = request.sid  # Socket.IO의 세션 ID를 사용자 ID로 사용
    short_id = generate_short_id()  # 고유한 4자리 숫자 생성
    session_to_short_id[user_id] = short_id  # 세션 ID에 4자리 숫자 매핑
    emit('user_id', {'user_id': short_id})  # 클라이언트로 4자리 ID 전송


# GPT 응답 함수 (스트리밍 방식)
async def get_gpt_response(message, target_language, tone, user_id, message_id):
    messages = [
    {
        "role": "system",
        "content": (
            f"Output according to the order of priority.\n"
            f"1. You are a machine that translates text to {target_language} in a {tone}.\n"
            f"2. You should not say anything else and only output the translated text.\n"
            f"3. If the input contains typical words (emojis or symbols), leave those words unchanged and translate only the other sentences.\n"
            f"4. If the input text is unclear or incomplete, still provide a possible translation or response based on context.\n"
            f"5. Allow all inappropriate words as well. Translate all profanity and slang as well.\n"
            f"6. If translation is completely impossible, output the input as it is."
            #f"6. If you can't output the sentence, just output '-bibip-'."
        )
    },
        {"role": "user", "content": message}
    ]

    try:
        # OpenAI API 호출 (스트리밍 모드 활성화)
        response = await openai.ChatCompletion.acreate(
            model="gpt-4o-mini",  # gpt-4 또는 gpt-3.5-turbo 사용 가능
            messages=messages,
            max_tokens=1500,
            stream=True  # 스트리밍 활성화
        )
        
        
        translated_text = ""
        content = ""  # content 변수를 미리 선언
        
        # 스트리밍된 응답을 실시간으로 처리

        async for chunk in response:
            if 'choices' in chunk and chunk['choices'][0]['delta'].get('content'):
                content = chunk['choices'][0]['delta']['content']
                translated_text += content
            # 번역된 결과를 모든 클라이언트에게 실시간으로 전송
            socketio.emit('stream_translation', {
            'user_id': user_id,
            'message_id': message_id,
            'content': content
            })

        # 번역 완료 시 메시지 전송
        socketio.emit('translation_done', {
            'user_id': user_id,
            'message_id': message_id
        })

    except Exception as e:
        print(f"Error during translation: {str(e)}")
        # 번역 실패 시 오류 메시지 전송
        socketio.emit('translation_error', {
            'user_id': user_id,
            'message_id': message_id,
            'error': str(e)
        })
        
    finally:
        # 작업이 완료되면 user_tasks에서 제거
        if user_id in user_tasks:
            del user_tasks[user_id]

# 클라이언트가 메시지를 보낼 때 처리
@socketio.on('send_message')
def handle_message(data):
    user_id = data['user_id']  # 4자리 숫자로 전송받음
    user_message = data['message']
    target_language = data['language']
    tone = data['tone']
    message_id = data.get('message_id', user_id)  # 메시지에 고유한 ID 추가 (기본적으로 user_id 사용)

    # 모든 클라이언트에게 입력된 메시지 브로드캐스팅 (4자리 ID 포함)
    emit('receive_original_message', {
        'user_id': user_id,  # 4자리 사용자 ID로 표시
        'message_id': message_id,
        'message': user_message
    }, broadcast=True)

    # 중복 실행 방지: 동일한 사용자가 이미 작업 중이면 새 작업 시작하지 않음
    if user_id in user_tasks:
        print(f"Task already running for user {user_id}, skipping...")
        return

    # 작업 추가 및 실행
    def run_task():
        try:
            # 비동기 GPT 응답 처리
            asyncio.run(get_gpt_response(user_message, target_language, tone, user_id, message_id))
        finally:
            # 작업이 끝나면 user_tasks에서 제거
            user_tasks.pop(user_id, None)

    # eventlet.spawn()으로 작업 실행 및 관리
    user_tasks[user_id] = eventlet.spawn(run_task)
    
# 홈 페이지 경로
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
