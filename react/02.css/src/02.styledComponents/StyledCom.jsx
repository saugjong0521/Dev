import styled from 'styled-components';

/*
styled-components
//yarn add styled-components
//npm install styled-components

설치형 라이브러리로 스크립트 코드 안에서 css를 작성할 수 있게 해주는 라이브러리

기본적으로 컴포넌트 방식으로 스타일을 관리한다.

스타일과 로직을 한 파일에서 관리하는 특징이 있다.

컴포넌트명을 작성할때 소문자로 작성하면 태그로 인식하기 때문에, 대문자로 작성한다.

스크립트 문법도 같이 사용할 수 있다. (if, &&)
*/

export default function StyledCom (){
    return (
        <>
        <Container className='container'>
            {/* 컴포넌트 명과 클래스 명은 서로 다르게 작용하기 때문에 각각 적용 가능 */}
            <ButtonItem fontColor={'orange'}>클릭!</ButtonItem>
            <ButtonItem fontColor={'blue'}>클릭!</ButtonItem>
            <ButtonItem>클릭!</ButtonItem>

        </Container>
        </>
    )
}


const Container = styled.section`
    display: flex;
    max-width: 1200px;
    background: lightgray;
    padding: 24px;
    margin: 0 auto;
`
const ButtonItem = styled.button`
    background: lightpink;
    width: 200px;
    height: 50px;
    cursor: pointer;
    opacity: 0.5;
    transition: 500ms;
    &:hover{
        opacity: 1;
        /* 
        &는 현재 요소 자신을 참조한다는 뜻 
        즉, &:hover의 뜻은 해당 요소에 hover을 한다는 의미
        */
    }
`