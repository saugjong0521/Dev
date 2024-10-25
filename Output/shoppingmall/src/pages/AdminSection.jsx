import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";


export default function AdminSection(){

    const [file, setFile] = useState(null); // 파일 업로드
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const {categoryList} = useContext(CategoryContext);
    // console.log(categoryList)

    const colors = ['#fff', '#000', '#fdbb2d', '#775305', '#f596e6']

    const [products, setProducts] = useState({
        title: '',
        price: '',
        size: '',
        category: '',
        description: '',
        colors : [],
    })  //모든 상품의 상태를 빈 문자열로 초기화

    return(
        <>
            <h1>어드민섹션</h1>
        </>
    )
}