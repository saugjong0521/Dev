import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { onUserState } from "../api/Firebase";


export default function QnADetailPage (){

    const state = useLocation().state;
    const {id, user, date, title, text} = state;
    const [loginUser, setLoginUser] = useState();

    useEffect(() => {
        onUserState((user) => {
            setLoginUser(user)
        })
    })

    return(

        <div className="container">
            <div className="boardBox">
                <strong>{title}</strong>
                <p>{text}</p>
                <p>{date}</p>
            </div>
        </div>

    )

}