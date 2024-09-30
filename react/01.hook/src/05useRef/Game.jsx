import { useState } from "react";
import gameImg from '../gameImg.png';



export default function Game() {
    /*
    
    가위바위보 게임
    조건: 내 점수와 pc의 점수를 비교
    
    점수 차이로 승 패 무를 결정

    점수차이가 0점인 경우 비김
    
    점수차이가 -1/2인 경우 플레이어 승리
    
    점수차이가 1/-2인 경우 PC의 승리
    
    */

    const scoreSetting = {
        가위 : 1,
        바위 : 0,
        보 : -1
    };   //점수 기준 정하기

    const gamePo = {
        바위 : '-100px',
        가위 : '-500px',
        보 : '-900px'
    };

    const [result, setResult] = useState('');    //결과값 (승리, 비김, 패배)
    const [score, setScroe] = useState(0);   //기본 점수
    const [imgPo, setImgPo] = useState(gamePo.바위);


    return(

        <>
            <div className="handleImg" 
            style={{
                width: '400px',
                height: '570px',
                background: `url(${gameImg})`
                }}>


            </div>
        </>

    )


}