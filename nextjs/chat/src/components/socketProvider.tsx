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
    if(!res.socket.server.io)
}