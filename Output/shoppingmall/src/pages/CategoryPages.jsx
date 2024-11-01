import { useParams } from "react-router-dom"
import CategoryProductsList from "../components/CategoryProductsList";
import { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/Firebase";
import CategorySlider from "../components/CategorySlider";


export default function CategoryPages(){
    // console.log(product)
    const {category} = useParams();
    const [product, setProduct] = useState([]);

    const [randomImages, setRandomImages] = useState([]);

    useEffect(()=>{
        getCategoryProduct(category)
        .then((product)=>{
            setProduct(product)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[category])

    useEffect(()=>{
        if(product.length > 0){
            const randomImg = [...product].sort(()=>0.5-Math.random())
            // 배열을 램덤하게 섞어주는 정렬
            // sort 메소드는 배열의 요소를 정렬하기 위해 비교함
            // 이 비교 함수에서는 배열의 두 요소 a,b를 비교해서 양수, 음수, 0을 반환
            // 음수 (a<b)면 a가 b보다 앞에 위치
            // 양수 (a>b)면 a가 b보다 뒤에 위치
            // 0 : 위치를 변경하지 않음
        }
    })

    return (
        <>
            <CategorySlider/>
            <CategoryProductsList category={category} product={product}/>
        </>
    )

}