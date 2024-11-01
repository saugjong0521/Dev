import styled from "styled-components";
import { googleLogin } from "../api/Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login (){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('')

    const handleGoogleLogin = async() => {
        const user = await googleLogin();
        if(user){
            navigate('/');
        }
    }

    return (
        <div className="container">
            <h1>로그인 페이지</h1>
            <form>
                <input 
                    type="email" 
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={''}
                />
                <input 
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={''}
                />
                <button type="submit">로그인</button>
            </form>
            <GoogleBtn onClick={handleGoogleLogin}>구글 로그인</GoogleBtn>
        </div>
    )
}

const GoogleBtn = styled.button`
    padding: 100px 200px;
`