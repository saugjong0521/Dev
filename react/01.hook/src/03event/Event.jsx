
/*

react에서의 이벤트 처리 방법

1. 이벤트의 이름은 카멜기법으로 작성 
onclick = X
onClick = O

2. 이벤트 전달
이벤트 핸들러로 이벤트를 전달할 때에는 함수형태로 전달하거나 즉시 실행으로 한다.
함수명으로 호출시 ()는 생략
onClick = {event()} 대신 onClick = {event}로 전달한다.

3. 기본 이벤트 제거
리액트에서 요소의 기본 이벤트를 막기 위해서 return false를 사용할 수 없다.
반드시 기본 이벤트를 막을때에는 event.preventDefault()만 사용한다.

이벤트 종류
- 클릭이벤트
onClick

- 폼 이벤트
onChange: 입력요소 안에서 값이 변경되는 것을 추적
onSubmit: 사용자가 폼안에 있는 내용을 서버에 전달하는 이벤트

- 포커스 이벤트
onFocus: 요소에 포커스가 들어왔을때
onBlur: 요소에 포커스가 아웃되었을때

- 마우스 이벤트
onMouseMove: 요소 내에서 마우스가 움직이는 이벤트
onMouseEnter: hover이벤트
onMouseLeave: out이벤트

- 키보드 이벤트
한글로 입력시 console창에는 다른 글이 나올 수 있음
onKeyDown: 키를 누를때 사용
onKeyUp: 키를 눌렀다 땔 때 발생
onKeyPress: 키를 누르고 있는 상태

- 터치 이벤트
onTouchStart
onTouchMove
onTouchEnd


*/

import { useState } from "react";



export default function Event() {

    const [inputValue, setInputValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [text, setText] = useState('마우스가 영역 밖에 있습니다.')

    const [keyDownValue, setKeyDownValue] = useState('');
    const [keyUpValue, setKeyUpValue] = useState('');
    const [keyPressValue, setKeyPressValue] = useState('');


    //폼 이벤트
    const handleChange = (e) => {
        setInputValue(e.target.value);
        // console.log(inputValue);
    }

    //제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`제출 내용 : ${inputValue}`);
    }

    //포커스 이벤트
    const handleFocus = (e) => {
        setIsFocus(true);
        // console.log(isFocus)
    }

    const handleBlur = (e) => {
        setIsFocus(false)
        // console.log(isFocus)
    }

    //마우스 이벤트
    const handleMouseMove = (e) => {
        // console.log(`${e.clientX}, ${e.clientY}`)
    }


    const handleMouseEnter = (e) => {
        return (
            setText('마우스가 영역 안으로 들어왔습니다.')
        )
    }

    const handleMouseLeave = (e) => {
        return (
            setText(`마우스가 영역 밖으로 다시 나갔습니다.`)
        )
    }


    //키보드 이벤트
    const handleKeyDown = (e) => {
        setKeyDownValue(`${e.key}`);
        console.log(`${e.key}키를 눌렀습니다.`)
    }

    const handleKeyUp = (e) => {
        setKeyUpValue(`${e.key}`);
        console.log(`${e.key}키를 뗏습니다.`)
    }

    const handleKeyPress = (e) => {
        setKeyPressValue(`${e.key}`);
        console.log(`${e.key}키를 누르고 있습니다.`)
    }



    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    
                    onKeyPress={handleKeyPress} // 비권장 이벤트 타입(최신 브라우저에서 비권장)
                    /* 
                    KeyPress
                    - 특정 브라우저에서 e.key의 값이 다르게 나올 수 있다.
                    */
                />
                <input type="submit" value='제출' />
            </form>
            {isFocus && <p>포커스 이벤트가 실행 되었습니다.</p>}

            <div onMouseMove={handleMouseMove} style={{ padding: '200px', backgroundColor: 'gray' }}>마우스 영역</div>

            <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    height: '200px',
                    width: '300px',
                    border: 'solid 1px black'
                }}>
                {text}
            </div>

        </>
    )

}