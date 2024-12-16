import { NextApiRequest } from "next";


// 채팅 api

export default async function handler (req: NextApiRequest, res: any){
    if(req.method === 'POST'){
        const message = req.body // 클라이언트에서 보낸 데이터(메시지)
        res?.socket?.server?.io?.emit('message', message);   // 메시지를 모든 클라이언트에게 전송
        /*
        res와 socket, server, io가 정의되었는지 먼저 확인 후 emit(다른 유저에게 뿌리는 메소드)를 호출
        

        socket.io는 클라이언트와 서버의 양방향 데이터 송수신을 지원

        *io
        - 서버-클라이언트에서 서버 사이드
        클라이언트 연결을 관리 (연결 / 해제)

        io.on 특정 이벤트를 수신
        io.emit 데이터를 모든 클라이언트들에게 전송
        io.to.emit 데이터를 특정 클라이언트들에게 전송
            emit이 뿌리는 메소드, io로 연결을 확인 및 emit으로 통신


        *socket
        - 서버-클라이언트에서 클라이언트 사이드
        socket.emit() 특정 클라이언트에게만 데이터 전송
        socket.on 클라이언트에서 이벤트 처리
        socket.join(변수) 특정 클라이언트를 그룹에 추가
        socket.leave(변수) 특정 클라이언트를 그룹에서 제거

        server
        http서버 객체 클라이언트와 연결을 관리
        http요청 / 응답
        socket.io 서버를 초기화할 때 http서버를 기반으로 한다.


        요약
        server: http서버로 socket.io가 작동할 서버
        io: socket.io서버 객체로 클라이언트 연결 및 데이터 전송
        socket: 클라이언트 자체, 클라이언트와 데이터 송수신 처리


        */
        res.status(200).json(message);
    }
}


