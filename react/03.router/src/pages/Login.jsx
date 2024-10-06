import { useState } from "react"


export default function Login () {

    const [userName, setUserName] = useState('');

    return (
        <>
            <h1>로그인 페이지</h1>
            <input type="text" 
                value={userName} 
                onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={handleLogin}>로그인</button>
        </>
    )
}