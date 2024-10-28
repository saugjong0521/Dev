import styled from "styled-components"
import DetailPageEvent from "./DetailPageEvent"


export default function Products({products}){

    return (


        <ProductList>
            {products && products.map((product) => (
                <li key={product.id}>
                    <DetailPageEvent product={product}/>
                </li>
            ))}
        </ProductList>

    )

}


const ProductList = styled.ul`
    
`