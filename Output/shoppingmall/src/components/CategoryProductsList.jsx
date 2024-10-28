import { useState } from "react"


export default function CategoryProductsList ({category, product}){

    const [products, setproducts] = useState(product);

    return(
        <div className="container">
            <h2>{category}</h2>

            <ul className="productList">
                {products}
            </ul>
        </div>
    )

}