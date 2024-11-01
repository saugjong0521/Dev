import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/Firebase";
import CategorySlider from "../components/CategorySlider";


export default function CategoryPages(){
    // console.log(product)
    const {category} = useParams();
    const [product, setProduct] = useState([]);

    const [randomImages, setRandomImages] = useState([]);

    useEffect(()=>{
        getCategoryProduct(category)
        .then((product)=>{
            setProduct(product)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[category])

    useEffect(()=>{
        if(product.length > 0){
            const randomImg = [...product].sort(()=>0.5-Math.random())
        }
    })

    return (
        <>
            <CategorySlider imgs={}/>
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}