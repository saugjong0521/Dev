import { NextApiRequest } from "next";


// 채팅 api

export default async function handler (req: NextApiRequest, res: any){
    if(req.method === 'POST'){
        const message = req.body // 클라이언트에서 보낸 데이터(메시지)
        res?.socket?.server?.io?.emit('message', message);   // 메시지를 모든 클라이언트에게 전송
        res.status(200).json(message);
    }
}