import { useEffect, useState } from "react";
import { getAllProduct } from "../api/Firebase";


export default function BestProducts(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const allProducts = await getAllProduct();

                const likeProducts = await Promise.all(
                    allProducts.map(async(product)=>{
                    const likes = await getLike(product.id)
                    return {...product, likes}
                    })
                )
                // getLikes를 사용해서 likeProducts를 사용할 셩우 하나의 아이템이 호출될때까지 다른 아이템의 호출을 중단(상품 수가 많으면 지연시간이 오래걸림)
                // promise.all을 사용하면 동시 호출이 된다.



                //좋아요 수 기준으로 정렬해서 상위 상품만 출력
                const bestProducts = likeProducts
                    .filter((product) => product.likes > 0)
                    .sort((a,b)=>b.likes - a.likes); // 좋아요 기준 내림차순

                    setProducts(bestProducts)
            } catch(error){
                console.error(error)
            }
        }
        fetchProducts()
    }, [])
}