import UseCart from "../context/UseCart"


export default function MyCart(){

    const {cartInfo : {data: products}} = UseCart();
    const isItem = products && products.length > 0
    
    return(
    
        <div className="container">
            <h2>장바구니 리스트</h2>
            {!isItem && <p>장바구니에 상품이 없습니다.</p>}
            {isItem &&(
                <ul>
                    {products && products.map((el, idx) => (
                        <li><img src={el.img}/>{el.title}</li>
                    ))}
                </ul>
            )}
        </div>

    )
}