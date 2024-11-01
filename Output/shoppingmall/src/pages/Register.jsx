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