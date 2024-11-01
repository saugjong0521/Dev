import UseCart from "../context/UseCart"


export default function MyCart(){

    const {cartInfo : {data: products}} = UseCart();
    return(
        <>
            <h1>장바구니 페이지</h1>
        </>
    )
}