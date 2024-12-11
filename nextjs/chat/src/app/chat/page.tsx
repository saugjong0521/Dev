import { useSocket } from "@/components/socketProvider";
import axios from "axios";
import { useEffect, useState } from "react";


interface message {
    userId : number,
    content : string,
}



const ChatPage = () => {
    const [message, setMessage] = useState<message[]>([]);  // 메시지 상태
    const [currentMessage, setCurrentMessage] = useState('');   // 현재 작성중인 메시지
    const [userId, setUserId] = useState(+new Date());  // 타임스탬프로 현재 유저 아이디 생성
    const {socket, isConnected} = useSocket();

    useEffect(()=>{
        if(!socket){
            return
        }

        // 서버에서 메시지를 수신하면 배열을 업데이트
        socket.on('message', (data:any) => {
            setMessage((message)=>[...message, data]);
        })

        return () => {
            socket.off('message')
        }
    },[socket, message])

    // 메시지 전송 이벤트
    const sendMessage = async(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        await axios.post('/api/chat',{
            userId : userId,
            content : currentMessage,
        })
        setCurrentMessage('')
    }



    return(
        <div className="border bg-card w-[300px] mx-auto"></div>
    )

}