import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useState } from "react";


export default function CategoryPages(){
    const [product, setProduct] = useState([]);

    const {category} = useParams();

    return (
        <>
            <h1>{category}</h1>
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}