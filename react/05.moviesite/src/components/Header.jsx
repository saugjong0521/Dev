import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SiNetflix } from "react-icons/si";
import NavigationBar from "./NavigationBar";
import Search from "./Search";


export default function Header () {
    return(

        <HeaderContainer>
            <Logo>
                <Link to = '/'>
                    <SiNetflix />
                </Link>
            </Logo>
            <NavigationBar/>


            <HeaderRight>
                {/* <Search/> */}
            </HeaderRight>
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
    gap: 60px;
`

const Logo = styled.h1`
    a{
        //link태그는 html에서 컴파일링 될 때에는 a태그로 인식함
        display: flex;
        align-items: center;
        font-size: 30px;
        color: red;
    }
`

const HeaderRight = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`