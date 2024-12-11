import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { Socket } from "net";


export type NextApiRes = NextApiResponse & {
    socket : Socket /*io*/ &{
        server : NetServer &{
            io : ServerIO
        }
    }
}

const ioHandler = (req: NextApiRequest, res: NextApiRes) => {
    if(!res.socket.server.io){
        // 서버가 생성되지 않은 경우, io를 초기화해서 생성
        const path =  "" // 서버 설정 경로
        const httpServer : NetServer = res.socket.server as any;
        const id = new ServerIO(httpServer, {
            path: path,
            addTrailingSlash: false
            // url끝에 slash 추가하지 않음
        })

        res.socket.server.io = io // 서버에 인스턴스 추가
    }
}

export default ioHandler