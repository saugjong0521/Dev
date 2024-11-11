import { useEffect, useState } from "react"
import { DeleteItem, getProducts } from "../api/Firebase";


export default function AdminPage (){

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(setProducts)
        // 전체 상품 가져오기
    },[])

    //상품 삭제
    const handleDeleteItem = async (id) => {
        const confirmDelete = window.confirm('상품을 삭제하시겠습니까?')
        if(confirmDelete){
            await DeleteItem(id);
            setProducts(products.filter(product => product.id !== id));
        }
    }

    // async를 사용하지 않는 옛날 방법
    // const handleDeleteItem = (id) => {
    //     const confirmDelete = window.confirm('상품을 삭제하시겠습니까?')
    //     if(confirmDelete){
    //         DeleteItem(id).then(() => {
    //             setProducts(products.filter(product => product.id !== id))
    //         }).catch((error)=>{
    //             console.error(error)
    //         })
    //     }
    // }

    /*
    비동기 처리시 async / await의 사용과 then을 사용할 때의 차이점
    async / await = 비동기 코드를 간단하고 읽기 쉽게 하며, 오류처리에 대한 문법을 강제함으로써 직관적인 오류처리를 가능하게 함

    async 비동기데이터 // await 비동기데이터가 가져와지기 전까지 기다리게 함
    */

    return(
        <div className="container">
            <h2>관리</h2>
            <div className="adminList">
                <ul>
                    {products.map(el => (
                        <li key={el.id}>
                            {el.title}
                            <button onClick={()=>handleDeleteItem(el.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}