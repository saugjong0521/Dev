import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/Firebase";
import CategorySlider from "../components/CategorySlider";


export default function CategoryPages(){
    // console.log(product)
    const {category} = useParams();
    const [product, setProduct] = useState([]);

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
        <CategorySlider/>
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}