

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
`