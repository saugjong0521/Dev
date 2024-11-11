import { useEffect, useState } from "react"
import { getProducts } from "../api/Firebase";


export default function AdminPage (){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(setProducts)
        // 전체 상품 가져오기
    },[])

    //상품 삭제
    const handleDeleteItem = (id) => {
        const confirmDelete = window.confirm('상품을 삭제하시겠습니까?')
    }

    return(
        <div className="container">
            <h2>관리</h2>
            <div className="adminList">
                <ul>
                    {products.map(el => (
                        <li key={el.id}>
                            {el.title}
                            <button onClick={handleDeleteItem(el.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}