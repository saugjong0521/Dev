import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../api/Firebase";


export default function ProductEdit(){

    const {id} = useParams()//url에 있는 상품 id받아오기
    console.log(id)

    const [product, setProduct] = useState(null);

    return(
        <div className="container">
            product && {}
        </div>
    )
}