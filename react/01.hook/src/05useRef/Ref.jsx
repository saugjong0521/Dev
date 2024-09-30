/*

useRef

1. dom 요소에 직접적으로 접근하기 위한 목적의 hook
(react에서는 가급적 dom에 직접 접근하는것을 금지하지만, 필요할때에는 ref로 접근하는 것을 허용)
e.g.) 입력 필드에 포커스를 주거나, 멀티미디어 요소를 제어하는 역할에 주로 ref를 사용

2. 상태값처럼 유지할 필요가 있는 값이 있지만, 그 값이 변경되어도 리랜더링을 유발하지 않아야 하는 경우
- 상태값이 변경되면 기본적으로 리랜더링이 발생되기에, 이를 방지하는 역할
e.g.) 랜더링 주기와 상관없이 지속적으로 유지해야 할 데이터 (타이머, 카운터)

*/

import { useEffect, useRef, useState } from "react";



export default function Ref() {


    //case 01 객체에 직접적으로 접근
    const ref = useRef(); //선택한 값을 넣기 전에 빈 값으로 초기화/선언 작업
    // console.log(ref)

    useEffect(()=>{
        ref.current.focus() //선택된 객체에 focus()주기
        // console.log(ref)
    })

    
    //case 02 상태값 관리
    //useState버전

    const [num,setNum] = useState(0);
    console.log('랜더링 실행')

    const handleCount = () => {
        setNum((prev) => prev+1);
    };

    //useRef버전
    const numRef = useRef(0);
    console.log('랜더링 실행')

    const handleCountRef = () => {
        numRef.current += 1;
    };

    return (

        <>

        <input ref={ref} /> 
        {/* 초기화 된 ref를 연결할 객체에 ref라는 속성을 주고, 초기화된 ref에 변수를 입력 */}

        <p>{num}</p>
        <button onClick={handleCount}>1더하기</button>

        <p>{numRef}</p>
        <button onClick={handleCountRef}>1더하기</button>



        </>

    )
}