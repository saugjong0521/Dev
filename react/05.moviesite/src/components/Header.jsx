import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Header () {
    return(

        <HeaderContainer>
            <Logo>
                <Link to = '/'>
                    넷플릭스
                </Link>
            </Logo>
        </HeaderContainer>

    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    padding: 12px 36px;
    box-sizing: border-box;
    background-color: black;
    width: 100%;
    z-index: 99;    //fixed
`

const Logo = styled.h1`
    font-size: 30px;
    color: red;
    a{
        //link태그는 html에서 컴파일링 될 때에는 a태그로 인식함
        display: flex;
        align-items: center;
    }
`