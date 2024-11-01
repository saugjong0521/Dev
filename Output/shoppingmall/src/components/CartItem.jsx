

export default function CartItem ({product, index}){

    return(
        <li>
            <p>{index}</p>
            <img src={product.img} alt={product.title}/>
            <p>{product.title}</p>
            <p>{product.size}</p>
            <p>{product.price}</p>
            <div className="quantityWrap">
                <p>수량: {product.quantity}</p>
            </div>
        </li>
    )

}