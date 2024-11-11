import { useEffect, useState } from "react"
import { getProducts } from "../api/Firebase";


export default function AdminPage (){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(setProducts)
        // 전체 상품 가져오기
    })

    return(
        <div className="container">
            <h2>관리</h2>
            <div className="adminList"></div>
        </div>
    )

}