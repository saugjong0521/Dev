import { useState } from "react"


export default function Register(){

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [pwErr, setPwErr] = useState('');

    //이름 유효형 검사
    const validateName = (userName) => {
        if(!userName){
            setNameErr('이름을 입력해주세요')
            return false;
        } // 이름을 생략하거나 공백으로 넣은 경우
        if(userName.length <2){
            setNameErr('이름이 너무 짧습니다.')
            return false;
        }
        if(!/^[A-Za-z가-힣\s'-]+$/.test(userName)){
            /*
            !/^[A-Za-z가-힣\s'-]+$
            정규 표현식
            ^는 문자열의 시작 $는 문자열의 끝
            현재 영어 대소문자 및 한글 허용
            \s 공백 허용
            '- 따옴표와 하이픈 허용(큰따옴표, 작은따옴표)
            + 한글자 이상이어야 함
            */
        }
    }

    return(
        <div className="container">
            <h2>회원가입</h2>
            <form>
                <div>
                    <input type="email"></input>
                    <input type="password"></input>
                    <input type="text" placeholder="이름을 입력하세요"/>
                    
                </div>
            </form>
        </div>
    )

}