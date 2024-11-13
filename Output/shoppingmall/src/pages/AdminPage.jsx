import { useContext, useEffect, useState } from "react"
import { DeleteItem, getProducts } from "../api/Firebase";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";


export default function AdminPage (){

    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const {categoryList} = useContext(CategoryContext);
    const [selectCategory, setSelectCategory] = useState('')

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

    console.log(categoryList)


    const handleEditItem = (id) => {
        navigate(`/admin/edit/${id}`)
    }

    return(
        <div className="container">
            <h2>관리</h2>
            <button><Link to='/admin/upload'>상품 업로드</Link></button>
            <AdminList>
            <h2>업로드된 상품 관리</h2>
            <label htmlFor="categorySelect">카테고리별 상품 보기</label>
            <select id="categorySelect" value={categoryList}/>
                <ul>
                    {products.map(el => (
                        <li key={el.id}>
                            {el.title}
                            <button onClick={() => handleDeleteItem(el.id)}>삭제</button>
                            <button onClick={() => handleEditItem(el.id)}>상품 수정</button>
                        </li>
                    ))}
                </ul>
            </AdminList>
        </div>
    )

}

const AdminList = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`