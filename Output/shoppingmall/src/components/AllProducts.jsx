import { useEffect, useState } from "react";
import { getProducts } from "../api/Firebase";
import Products from "./Products";


export default function AllProduct (){
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const fetchProducts = async() => {
            try{
                const products = await getProducts();
                setProduct(products);
            } catch(error){
                console.error(error)
            }
        }
        fetchProducts();
    }, [])

    return(
        <>
        <div className="container">
            <Products products={product}/>
        </div>

        </>
    )

}