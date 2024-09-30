import { useEffect, useRef, useState } from "react";
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
        가위: 1,
        바위: 0,
        보: -1
    };   //점수 기준 정하기

    const gamePo = {
        바위: '-120px',
        가위: '-450px',
        보: '-800px'
    };

    const [result, setResult] = useState('');    //결과값 (승리, 비김, 패배)
    const [score, setScroe] = useState(0);   //기본 점수
    const [imgPo, setImgPo] = useState(gamePo.바위);


    // 이미지가 돌아가는 동안 리랜더링이 계속 되지 않도록 ref를 사용
    const intervalRef = useRef();


    const [isPlay, setIsPlay] = useState(false) //게임 진행 여부


    useEffect(() => {
        intervalRef.current = setInterval(changeHand, 50)

        return ()=> {
            clearInterval(intervalRef.current)
        }
    }, [imgPo])

    const changeHand = () => {
        if(imgPo === gamePo.바위){
            setImgPo(gamePo.가위)
        }
        else if(imgPo === gamePo.가위){
            setImgPo(gamePo.보)
        }
        else if(imgPo === gamePo.보){
            setImgPo(gamePo.바위)
        }
    }
    /*
    imgPo = 현재 손동작의 위치
    gamePo = 가위 바위 보 각각의 이미지가 표시된 위치값
        -> 값이 다르면 계속 다음 포지션으로 이동시킴
    */


    const handleClick = (choice) => {
        if(isPlay){
            return; //게임이 진행 중이라면 즉시 종료
        }
        setIsPlay(true);
        clearInterval(intervalRef.current);

        const myScore = scoreSetting[choice];
        console.log(myScore)

        const pcScore = scoreSetting[getChoicePC(imgPo)]
        console.log(pcScore)

    }

    const getChoicePC = (imgPo) => {
        return Object.keys(gamePo).find((key)=>gamePo[key] === imgPo)
    }


    return (

        <>
            <div className="handleImg"
                style={{
                    width: '400px',
                    height: '570px',
                    background: `url(${gameImg}) ${imgPo} 0` 
                }}>
            </div>

            <button onClick={() => handleClick('가위')}>가위</button>
            <button onClick={() => handleClick('바위')}>바위</button>
            <button onClick={() => handleClick('보')}>보</button> 
            {/*<button onClick={handleClick('보')}>보</button> 면 즉시실행이라서, 버튼을 누를 시 작동하도록 ()=>{}를 통해 적용 */}
        </>

    )


}