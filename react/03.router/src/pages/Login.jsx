import { useState } from "react"


export default function Login () {

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if(userName === 'ksj'){
            setMessage('');
        }
        else
        {
            setMessage('이름이 틀렸습니다.')
        }
    }

    return (
        <>
            <h1>로그인 페이지</h1>
            <input type="text" 
                value={userName} 
                onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={handleLogin}>로그인</button>

            {message && <p style={{color: 'red'}}>{message}</p>}
        </>
    )
}