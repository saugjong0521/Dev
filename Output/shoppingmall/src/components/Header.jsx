import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserData from "./UserData";
import { googleLogout, onUserState } from "../api/Firebase";


export default function Header (){

    const navigate = useNavigate();

    const handleLogin = ()=> {
        navigate('/login')
    }

    const [user,setUser] = useState();

    useEffect(()=>{
        onUserState((user)=>{
            setUser(user)
        })
    },[])

    console.log(user)

    const handleLogout = () => {
        googleLogout().then(setUser);
    }

    return (
        <HeaderContainer>
            <h1>
                <Link to=''>logo</Link>
            </h1>
            <div className="rightMenu">
                {user && user.isAdmin &&
                    <p>관리자</p>
                }
                {user ? (
                    <>
                    <UserData user={user}/>
                    <button className="logoutBtn" onClick={handleLogout}>logout</button>
                    </>
                ):(
                    <button className="loginBtn" onClick={handleLogin}>login</button>
                )}
            </div>
        </HeaderContainer>
    )

}


const HeaderContainer = styled.header`
    
    display: flex;
    padding: 12px 24px;
    align-items: center;
    gap: 24px;
    border-bottom: solid 1px rgba(0,0,0,0.3);
    .rightMenu{
        margin-left: auto;
        display: flex;
        align-items: center;
    }

`