import { useContext, useEffect, useState } from "react"
import { DeleteItem, deleteReview, getAllReviews, getProducts } from "../api/Firebase";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CategoryContext } from "../context/CategoryContext";


export default function AdminPage (){

    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    
    const {categoryList} = useContext(CategoryContext);
    const [selectCategory, setSelectCategory] = useState('');
    const [isDrop, setIsDrop] = useState(false) // 드롭 상태 설정(기본값은 닫힘: false)

    const [review, setReview] = useState({});

    const [activeTab, setActiveTab] = useState('products')

    useEffect(() => {
        getProducts().then(setProducts)
        // 전체 상품 가져오기

        getAllReviews().then(setReview)
    },[])

    console.log(review)

    //상품 삭제
    const handleDeleteItem = async (id) => {
        const confirmDelete = window.confirm('상품을 삭제하시겠습니까?')
        if(confirmDelete){
            await DeleteItem(id);
            setProducts(products.filter(product => product.id !== id));
            
            // 11.13 추가 삭제시 리뷰도 제거
            setReview(reviews => {
                const updateReview = {...reviews};
                delete updateReview[id]
                return updateReview;
            })
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

    // console.log(categoryList)

    const handleCategoryChange = (category) => {
        setSelectCategory(category)
        setIsDrop(false)
    }

    const filterCategoryItem = selectCategory
    ? products.filter((product)=>product.category === selectCategory) : products

    const handleEditItem = (id) => {
        navigate(`/admin/edit/${id}`)
    }


    // 상품 title 넘겨주기
    const productNames = products.reduce((item, product) => {
        item[product.id] = product.title;
        return item
    },{})


    const handleDeleteReview = async(productId, reviewId) => {
        const confirmDelete = window.confirm('리뷰를 삭제하시겠습니까?')
        if(confirmDelete){
            await deleteReview(productId, reviewId)
            setReview(prevReview => {
                const updateReview = {...prevReview}
                if(updateReview[productId]){
                    delete updateReview[productId][reviewId]
                    return updateReview
                }
            })
        } else{

        }
    }


    return(
        <div className="container">
            <h2>관리자 페이지</h2>

            <h2>관리</h2>
            <button><Link to='/admin/upload'>상품 업로드</Link></button>


            <TabButtonContainer>
                <TabBtn 
                    active = {activeTab === 'products'}
                    onClick={()=>setActiveTab('products')}>
                        상품관리
                </TabBtn>
                <TabBtn 
                    active = {activeTab === 'reviews'}
                    onClick={()=>setActiveTab('reviews')}>
                        리뷰
                </TabBtn>
            </TabButtonContainer>

            {activeTab === 'products'&& (
                <div className="tabList">
                    <AdminList>
                    <h2>업로드된 상품 관리</h2>
                    <label htmlFor="categorySelect">카테고리별 상품 보기</label>
                    
                    <DropCategoryList>
                        <DropDownBtn onClick={()=>setIsDrop(!isDrop)}>
                            {selectCategory || '전체'}
                            {isDrop && (
                                <ItemCategory>
                                    <MenuItem onClick={()=>handleCategoryChange('')}>전체</MenuItem>
                                    {categoryList.map((category, idx) => (
                                        <MenuItem key={idx} onClick={()=>handleCategoryChange(category)}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </ItemCategory>
                            )}
                        </DropDownBtn>
                    </DropCategoryList>
                        <ul>
                            {filterCategoryItem.map(el => (
                                <li key={el.id}>
                                    {el.title}
                                    <button onClick={() => handleDeleteItem(el.id)}>삭제</button>
                                    <button onClick={() => handleEditItem(el.id)}>상품 수정</button>
                                </li>
                            ))}
                        </ul>

                    </AdminList>
                </div>

            )}



            {activeTab === 'reviews'&&(
                <div className="tabList">
                    <ReviewList>
                    <h2>상품 리뷰</h2>
                    {Object.keys(review).map(productId => (
                        <div key={productId}>
                            <h3>상품명 : {productNames[productId]}</h3>
                            <ul>
                                {Object.keys(review[productId]).map(reviewId => (
                                    <li key = {reviewId}>
                                        {review[productId][reviewId].text}
                                        <button onClick={()=>handleDeleteReview(productId, reviewId)}>삭제</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    </ReviewList>
                </div>
            )}
        </div>



    )

}


const TabButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

const TabBtn = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    background: ${({active})=>(active ? '#333' : '#ddd')};
    color: ${({active})=>(active ? '#fff' : '#333')};
    border: none;
    outline: none;
    &:hover{
        background: #666;
        color: #fff;
    }
`



const AdminList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const DropCategoryList = styled.div`
    position: relative;
    display: inline-block;
    width: 20vw;
`

const DropDownBtn = styled.div`
    padding: 8px 16px;
    border: solid 1px #000;
    cursor: pointer;
    background: #ddd;
`

const ItemCategory = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border: solid 1px #000;
    width: 100%;
`

const MenuItem = styled.div`
    padding: 8px 16px;
    text-align: left;
    cursor: pointer;
    &:hover{
        background: #ddd;
    }
`

const ReviewList = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ul{
        display: flex;
        flex-direction: column;
    }

`