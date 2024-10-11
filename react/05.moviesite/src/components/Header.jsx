

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
    position: fixed;
`