
/*

useState와 useEffect를 이용해서 카운트다운을 만들기

1. useState의 초기값을 설정하고 useEffect로 값을 차감
2. useState의 값이 0이 되면 텍스트를 화면에 출력하고, 카운트다운이 멈추도록 설정

*/

import { useEffect } from "react";

export default function EffectEx() {

    const [cdinit, setCountdown] = useState(5);



    if(setCountdown > 0){
        useEffect(()=>{
            const timer = setinterval(() => {
                setCountdown((prev) => prev - 1);
            },1000)
        })
    } else {setCountdown == 0}

    

}