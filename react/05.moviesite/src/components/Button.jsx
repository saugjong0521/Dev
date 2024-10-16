import styled from "styled-components"


export default function Button (accent, children, onclick){

    return(

        <Btn accent={accent} onclick = {onclick}>
            {children}
        </Btn>


    )

}

const Btn = styled.div`
    background-color: ${(props) => props.accent ? `rgba(255,255,255,0.7)` : `rgba(100,100,100,0.8)`};
    color: ${(props) => props.account ? `#000`, '#fff'}
`