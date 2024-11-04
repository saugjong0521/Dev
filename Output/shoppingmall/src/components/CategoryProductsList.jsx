import { useEffect, useState } from "react"
import DetailPageEvent from "./DetailPageEvent";
import styled from "styled-components";
import SortBtn from "./SortBtn";


export default function CategoryProductsList ({category, product}){

    // const [products, setproducts] = useState(product);

    const [sortProducts, setSortProducts] = useState(product);
    const [sortType, setSortType] = useState();

    useEffect(()=>{
        if(sortType === 'name'){
            sortName()
        } else if(sortType === 'price'){
            sortPrice()
        } else{
            setSortProducts(product)
        }
    }, [product, sortType])

    const sortName = () => {
        const sortList = [...product].sort((a,b) => {
            if(!a.name || !b.name){
                return 0
                // 둘 중 하나라도 이름이 정의되지 않았다면, 순서를 변경하지 말 것
            }
            return a.name.charAt(0).localeCompare(b.name.charAt(0))
        })
    }

    return(
        <div className="container">
            <h2>{category}</h2>

            <SortBtn sortName={sortName} sortPrice={sortPrice}/>

            <DetailListCSS className="productList">
                {product.map((el) => (
                    <li key={el.id}>
                        <DetailPageEvent product={el}/>
                    </li>
                ))}
            </DetailListCSS>
        </div>
    )

}

const DetailListCSS = styled.ul`
    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
    width: 100%;
    li {
        flex-shrink: 0;
        width: 30%;
    }
`

