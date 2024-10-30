import { useState } from "react"
import DetailPageEvent from "./DetailPageEvent";
import styled from "styled-components";


export default function CategoryProductsList ({category, product}){

    // const [products, setproducts] = useState(product);

    return(
        <div className="container">
            <h2>{category}</h2>

            <ul className="productList">
                {product.map((el) => (
                    <DetailListCSS key={el.id}>
                        <DetailPageEvent product={el}/>
                    </DetailListCSS>
                ))}
            </ul>
        </div>
    )

}

const DetailListCSS = styled.li`
display: flex;
gap: 20px 5%;
flex-wrap: wrap;
li{
flex-shrink: 0;
width: 30%;
}
`

