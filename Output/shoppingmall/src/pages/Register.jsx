import { useState } from "react"


export default function Register(){

    const [userName, setUserName] = useState('')

    return(
        <div className="container">
            <h2>회원가입</h2>
            <form>
                <div>
                    <input type="email"></input>
                    <input type="text" placeholder="이름을 입력하세요"/>
                    
                </div>
            </form>
        </div>
    )

}