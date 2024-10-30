import { useState } from "react"
import DetailPageEvent from "./DetailPageEvent";
import styled from "styled-components";


export default function CategoryProductsList ({category, product}){

    // const [products, setproducts] = useState(product);

    return(
        <div className="container">
            <h2>{category}</h2>

            <DetailListCSS className="productList">
                {product.map((el) => (
                    <li key={el.id}>
                        <DetailPageEvent product={el}/>
                    </li>
                ))}
            </DetailListCSS>
        </div>
    )

}

const DetailListCSS = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    li {
        flex-shrink: 0;
        width: 30%;
    }
`

