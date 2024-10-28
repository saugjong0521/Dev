import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/Firebase";


export default function CategoryPages({category, product}){
    console.log(product)
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
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}