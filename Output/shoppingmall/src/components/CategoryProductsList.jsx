import { useState } from "react"
import DetailPageEvent from "./DetailPageEvent";


export default function CategoryProductsList ({category, product}){

    // const [products, setproducts] = useState(product);

    return(
        <div className="container">
            <h2>{category}</h2>

            <ul className="productList">
                {products.map((el) => {
                    <li key={el.id}>
                        <DetailPageEvent product={el}/>
                    </li>
                })}
            </ul>
        </div>
    )

}