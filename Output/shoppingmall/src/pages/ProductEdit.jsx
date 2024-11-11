import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../api/Firebase";


export default function ProductEdit(){

    const {id} = useParams()//url에 있는 상품 id받아오기
    console.log(id)

    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        category: '',
        description: '',
        colors: [],
    });

    useEffect(()=>{
        getProducts(id).then(data => {
            setProduct(data)
            setFormData({
                title: data.title || '',
                price: data.price || '',
                size: data.size || '',
                category: data.category || '',
                description: data.description || '',
                colors: data.colors || [],
            })
        })
    },[id])

    console.log(formData)
    console.log(product)

    return(
        <div className="container">
            <h2>상품 수정</h2>
        </div>
    )
}