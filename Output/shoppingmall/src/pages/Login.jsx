import styled from "styled-components";
import { googleLogin } from "../api/Firebase";
import { useNavigate } from "react-router-dom";


export default function Login (){

    const navigate = useNavigate();

    const handleGoogleLogin = async() => {
        const user = await googleLogin();
        navigate('/');
    }

    return (
        <>
        <h1>로그인 페이지</h1>
        <GoogleBtn onClick={handleGoogleLogin}>구글 로그인</GoogleBtn>
        </>
    )
}

const GoogleBtn = styled.button`
    padding: 100px 200px;
`