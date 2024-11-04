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
           setNameErr('유효하지 않은 문자가 포함되어 있습니다.')
           return false
        }
        return true
    }
    
    const handleRegisterEvent = async (e) => {
        e.preventDefault();
        setPwErr('');
        setNameErr('');
        setEmailErr('');

        
        if(userPassword.length < 3){
            setPwErr('비밀번호는 4글자 이상이어야 합니다.')
            return
        }
        // if(){}
        if(!validateName(userName)){
            return
        }
    }

    return(
        <div className="container">
            <h2>회원가입</h2>
            <form onSubmit={handleRegisterEvent} noValidate>
            {/*noValidate 기본 유효성 검사 제거*/}
                <div>
                    <input 
                        type="email"
                        placeholder="이메일을 입력하세요"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {emailErr && <span className="errorText">{emailErr}</span>}
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {pwErr && <span className="errorText">{pwErr}</span>}
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="유저이름을 입력하세요"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}        
                    />
                    {nameErr && <span className="errorText">{nameErr}</span>}
                </div>
                <button type="submit">가입하기</button>
            </form>
        </div>
    )

}