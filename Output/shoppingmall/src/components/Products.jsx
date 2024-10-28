

export default function Products({products}){

    return (


        <ProductList>
            {product && product.map((product) => (
                <li key={product.id}/>)
        </ProductList>

    )
)

}