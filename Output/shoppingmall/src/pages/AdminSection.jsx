import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";


export default function AdminSection(){

    const [file, setFile] = useState(null); // 파일 업로드
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const {categoryList} = useContext(CategoryContext);
    // console.log(categoryList)

    return(
        <>
            <h1>어드민섹션</h1>
        </>
    )
}