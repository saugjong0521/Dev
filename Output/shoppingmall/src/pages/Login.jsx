import styled from "styled-components"


export default function Login (){

    return (
        <>
        <h1>로그인 페이지</h1>
        <GoogleBtn onClick={handleGoogleLogin}>구글 로그인</GoogleBtn>
        </>
    )
}

const GoogleBtn = styled.button`
    
`