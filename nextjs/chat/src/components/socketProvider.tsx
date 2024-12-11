import { createContext, useContext, useEffect, useState } from "react";


type SocketContextType = {
    socket : any | null ;   // 소켓 인스턴스
    isConnected : boolean ; // 연결 상태
}

// 초기값 생성
const SocketContext = createContext<SocketContextType>({
    socket : null,
    isConnected : false,
})

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = () => ({children} : {children:React.ReactNode}) => {
    const [socket, setSocket] = useState<any | null>(null); // 현재 소켓 상태
    const [isConnected, setIsConnected] = useState(false);  // 현재 연결 상태

    useEffect(()=>{
        if(!socket){
            return // 소켓이 없으면 초기화하지 않음
        }
        socket.on('연결을 해제했습니다.', async()=>{
            setIsConnected(false)
        },[socket])
    })
}