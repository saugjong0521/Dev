import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { addLike, formatCurrency, getLike } from "../api/Firebase";
import { useEffect, useState } from "react";
import UseCart from "../context/UseCart";
import ProductReview from "../components/ProductReview";
import { GoHeart } from "react-icons/go";


export default function ProductDetail (){

    const state = useLocation().state;
    // console.log(state);
    const {id, img, price, size, colors, description, title} = state;

    const setSize = size.split(',').map((opt)=>opt.trim());
    // console.log(setSize);
    
    const [selected, setSelected] = useState(setSize && setSize[0])
    
    const selectOpt = (e) => {
        setSelected(e.target.value)
    }

    const [success, setSuccess] = useState(); // 장바구니 아이템 전송 여부

    const {addItemCart} = UseCart()
    const handleCart = () => {
        const product = {id, img, title, price, size, size:selected, quantity:1}

        addItemCart.mutate(product,{
            onSuccess: () => {
                setSuccess('장바구니에 아이템이 추가되었습니다.')
            }
        })
    }

    const [likes, setLikes] = useState(0);

    useEffect(()=>{
        getLike(id).then((likes)=>{
            setLikes(likes)
        })
        .catch((error)=>{
            console.error(error)
        })
    })

    const handleLike = async () => {
        try{
            await addLike(id);
            getLike(id).then((likes)=>setLikes(likes));
        } catch(error){
            console.error(error)
        }
    }

    return(

        <div className="container">
            <DetailPage>
                <div className="detailImg">
                    <img src={img} alt={title}/>
                </div>
                <div className="detailText">
                    <h3>{title}</h3>
                    <p className="price">가격<span>{formatCurrency(price)}원</span></p>
                    <p className="description">{description}</p>

                    <div className="detailOpt">
                        {/* react에서는 label에 for 대신 htmlFor을 사용 */}
                        <label className="labelText" htmlFor="sizeSelect">옵션</label>
                        {size=="" ? <span>one-size</span> : 
                        <select id="sizeSelect" onChange={selectOpt} value={selected}>
                            {size && setSize.map((opt, idx)=>(
                                <option key={idx} value={opt}>{opt}</option>
                            ))}   
                        </select>
                        }
                    </div>

                    <div className="detailBtns">
                        <button className="cartBtn" onClick={handleCart}>장바구니</button>
                        <button className="buyBtn">구매하기</button>
                        <button className="likeBtn" onClick={handleLike}>♡ {likes}</button>
                    </div>
                    {success && <p>{success}</p>}
                    
                </div>
            </DetailPage>
            <ProductReview productId={id}/>

        </div>
        

    )

}

const DetailPage = styled.div`
    width: 100%;
    display: flex;
    gap: 60px;
    .datailImg{
        min-width: 400px;
        img{
            width: 100%;
            object-fit: cover;
            display: block;
        }
    }
    .detailText{
        display: flex;
        flex-direction: column;
        gap : 12px;
        width: 100%;
        h3{
            font-size: 40px;
            font-weight: 500;
            border-bottom: solid 1px rgba(0,0,0,0.2);
            padding-bottom: 20px;
        }
        .price{
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .detailOpt{
            display: flex;
            gap: 10px;
        }
        .detailBtns{
            display: flex;
            gap: 12px;
            margin-top: auto;
        }
        .detailBtns button{
            padding: 12px 24px;
        }
    }
`

