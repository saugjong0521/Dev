
/*

useReducer

상태 관리 hook
useState의 대체 hook

useState의 경우 간단한 상태 로직에서는 유용하지만,
복잡한 로직에서 상태관리를 할 경우 현재 상태가 이전 상태에 대한 의존도가 더 커지기 때문에
구조가 복잡해질수록 useReducer가 더 좋다.

주로 reducer에서는 switch문을 자주 사용한다.
여러가지 액션의 유형을 간단하게 처리할 수 있기 때문에 가독성 면에서
if문보다 switch의 사용도가 높은 편

*/

import { useState } from "react";

export default function Reducer () {
    //카운트 관리 useState버전
    const [count, setCount] = useState(0);

    const countPlus = (e) => {
        setCount((prev) => prev + 1)
    }

    const countMinus = (e) => {
        setCount((prev) => prev - 1)
    }

    



    return (
        <>
            <h1>{count}</h1>
            <button onClick={countPlus}>+</button>
            <button onClick={countMinus}>-</button>
        </>
    )


}