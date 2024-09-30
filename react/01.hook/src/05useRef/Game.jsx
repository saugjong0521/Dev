import { useState } from "react"



export default function Game() {
    /*
    
    가위바위보 게임
    조건: 내 점수와 pc의 점수를 비교
    
    0점은 비기기
    
    1점이 된 상대는 승리
    
    -1점이 된 상대는 패배
    
    */

    const scoreSetting = {
        가위 : 1,
        바위 : 0,
        보 : -1
    }   //점수 기준 정하기

    const gamePosi = {
        바위 : '-100px',
        가위 : '-500px',
        보 : '-900px'
    }

    const [result, setResult] = useState('')    //결과값 (승리, 비김, 패배)
    const [score, setScroe] = useState(0)   //기본 점수
    const [imgPosi, setImgPosi] = useState(gamePosi.바위);


}