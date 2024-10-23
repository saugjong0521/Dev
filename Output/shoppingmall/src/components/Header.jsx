import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Header (){

    const navigate = useNavigate();

    const handleLogin = ()=> {
        navigate('/login')
    }

    return (
        <HeaderContainer>
            <h1>
                <Link to=''>logo</Link>
            </h1>
            <div className="rightMenu">
                    <button className="loginBtn" onClick={handleLogin}>login</button>
            </div>
        </HeaderContainer>
    )

}


const HeaderContainer = styled.header`
    
    display: flex;
    padding: 12px 24px;
    align-items: center;
    gap: 24px;
    border-bottom: solid 1px rgba(0,0,0,0.3);
    .rightMenu{
        margin-left: auto;
        display: flex;
        align-items: center;
    }

`