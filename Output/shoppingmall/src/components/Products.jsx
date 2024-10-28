import styled from "styled-components"


export default function Products({products}){

    return (


        <ProductList>
            {product && product.map((product) => (
                <li key={product.id}/>))}
        </ProductList>

    )

}


const ProductList = styled.div`
    
`