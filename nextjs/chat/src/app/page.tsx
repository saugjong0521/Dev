import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}

/*
socket.io & socket.io-client

socket.io는 실시간 양방향 통신을 가능하게 해주는 라이브러리
nodejs 기반이기 때문에 nodejs 설치가 선행되야 한다.

일반적으로 데이터베이스를 사용하는 api에서 사용하는 http요청/응답 방식과 다른
클라이언트가 서버와 실시간으로 데이터를 주고받을수 있게 한다.(데이터를 따로)

데이터의 저장 방식은 메모리에서 저장하고 관리하지만 휘발성을 가지고 있다.
영구적인 데이터 저장 방식은 따로 DB를 이용해야 한다.


socket.io (환경을 관리)
- 서버측에서 동작하며, 클라이언트와 실시간으로 데이터를 주고받는 환경을 제공
- 클라이언트 끼리의 연결을 관리, 클라이언트에서 전송된 메시지를 수신, 다른 클라이언트로 전송해주는 역할

socket.io-client (통신을 관리)
- 클라이언트 측에서 동작하며, 서버와 실시간 양방향 통신을 가능하게 함
- 서버에서 전송한 메시지를 수신, 서버로 데이터를 전송함


주요 메서드
io.on
- 클라이언트가 서버에 연결되었을 때에 실행
- 메시지를 전송/수신 처리

io.emit
- 연결된 모든 클라이언트로 이벤트를 보냄

socket.on
- 클라이언트로부터 특정한 이벤트를 수신했을 때에 실행이 됨

socket.emit
- 특정 클라이언트에게 이벤트를 보냄(e.g. 메시지 전송)

socket.disconnect
- 클라이언트와 연결을 종료





*/