import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/Firebase";


export default function CategoryPages(){
    const [product, setProduct] = useState([]);

    const {category} = useParams();

    useEffect(()=>{
        getCategoryProduct(category)
        .then((product)=>{
            setProduct(product)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[category])

    return (
        <>
            <h1>{category}</h1>
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}