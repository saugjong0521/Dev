import { useState } from "react";
import { useParams } from "react-router-dom"


export default function ProductEdit(){

    const {id} = useParams()//url에 있는 상품 id받아오기
    console.log(id)

    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        description: '',
        colors: [],
    });

    return(
        <div className="container">
            <h2>상품 수정</h2>
        </div>
    )
}