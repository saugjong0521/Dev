import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";


export default function Nav(){
    const {categoryList} = useContext(CategoryContext);

    return (
        <Nav>
            <ul>
                {categoryList.map(el, idx)}
            </ul>
        </Nav>
    )
}