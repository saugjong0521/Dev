import Link from "next/link"




export default function ProductPage(){


    const products = ['item01', 'item02', 'item03', 'item04']


    return(
        <>
        <h1>제품 페이지 입니다.</h1>
        <ul>
        {products.map((el, idx)=>{
            <li key={idx}>
                <Link href={`/product/${el}`}>{el}</Link>
            </li>
        })}
    </ul>

    </>
    )
}