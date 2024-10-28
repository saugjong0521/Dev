import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";
import styled from "styled-components";


export default function Nav(){
    const {categoryList} = useContext(CategoryContext);

    return (
        <NavList>
            <ul>
                {categoryList.map((el, idx)=>(
                    <li key={idx}>
                        {el}
                    </li>
                ))}
            </ul>
        </NavList>
    )
}

const NavList = styled.nav`

`