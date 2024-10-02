import styled, { css, keyframes } from 'styled-components';
import keyframes from 'styled-components/dist/models/Keyframes';

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
            <ButtonItem fontColor={'orange'} sub = {true}>클릭!</ButtonItem>
            <ButtonItem fontColor={'blue'}>클릭!</ButtonItem>
            <ButtonItem>클릭!</ButtonItem>

            <Box bgColor={`aqua`}>box</Box>

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
const ButtonItem = styled(({fontColor, ...props}) => <button{...props}/>)`
//styled(({fontColor, ...props}) => <button{...props}/>) 스타일 컴포넌트에서 제공하는 기능
//컴포넌트에 전달된 props를 필터링해서 필터링된 props만 실제 html요소에 전달하기 위해서 사용
    background: lightpink;
    width: 200px;
    height: 50px;
    cursor: pointer;
    opacity: 0.5;
    transition: 500ms;
    color: ${(color) => color.fontColor};
    /*
    스타일 컴포넌트에는 컴포넌트에 전달된 props를 스타일 정의에 직접적으로 전달할 수 있다.
    $ {}구문은 자바스크립트 표현식에서 문자열 리터럴 안에 값을 넣어서 문자열에 포함
    (props) => props.fontColor는 현재 컴포넌트에 전달된 props객체에서 값을 전달받아 styles에 적용하는 방식
    */

    ${(props)=>props.sub && css `background: cyan;`}
    //css를 조건부로 넘겨줄때 css를 체크하는 메소드, styled-components에서 추가로 import
    &:hover{
        opacity: 1;
        /* 
        &는 현재 요소 자신을 참조한다는 뜻 
        즉, &:hover의 뜻은 해당 요소에 hover을 한다는 의미
        */
    }
`

const Box = styled(({bgColor, ...props})=><div{...props}/>)`
    width: 500px;
    height: 500px;
    background: ${(props)=> props.bgColor};
`

const CircleAni = keyframes`
    25%{
        background: lightcyan;
    }
    50%{
        background: lightsalmon;
    }
    75%{
        background: lightblue;
    }
    100%{
        background: lightyellow;
    }
`
//애니메이션 기능은 keyframes를 추가로 import해서 사용해야 하며,
//기본 사용법은 일반 css의 애니메이션과 동일하다.