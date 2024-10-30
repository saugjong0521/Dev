import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Nav(){
    const {categoryList} = useContext(CategoryContext);

    return (
        <MainMenu>
            <ul>
                {categoryList.map((el, idx)=>(
                    <li key={idx}>
                        <Link to={`/product/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
        </MainMenu>
    )
}

const MainMenu = styled.nav`
    display: flex;
    margin-left: 10vw;
    ul{
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        li{
            width: 100px;
            height: 20px;
            border: solid 1px rgba(0,0,0,0.3);
            padding: 10px;
        }
    }
`