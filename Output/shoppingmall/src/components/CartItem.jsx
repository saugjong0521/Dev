import UseCart from "../context/UseCart"


export default function CartItem ({product, index}){

    const {addItemCart} = UseCart()

    const handleItemAdd = ()=> {
        addItemCart.mutate
    }

    return(
        <li>
            <p>{index}</p>
            <img src={product.img} alt={product.title}/>
            <p>{product.title}</p>
            <p>{product.size}</p>
            <p>{product.price}</p>
            <div className="quantityWrap">
                <p>수량: {product.quantity}</p>
                <button onClick={handleItemAdd}>+</button>
                <button>-</button>
            </div>
        </li>
    )

}