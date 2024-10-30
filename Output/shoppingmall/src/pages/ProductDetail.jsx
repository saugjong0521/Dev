import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { formatCurrency } from "../api/Firebase";


export default function ProductDetail (){

    const state = useLocation().state;
    console.log(state);
    const {id, img, price, size, color, description, title} = state;

    const setSize = size.split(',').map((opt)=>opt.trim());
    console.log(setSize);

    return(

        <div className="container">
            <DetailPage>
                <div className="detailImg">
                    <img src={img} alt={title}/>
                </div>
                <div className="detailText">
                    <h3>{title}</h3>
                    <p className="price">가격<span>{formatCurrency(price)}</span>원</p>
                    <p className="description">{description}</p>
                </div>
                <div className="detailOpt">
                    {/* react에서는 label에 for 대신 htmlFor을 사용 */}
                    <label className="labelText" htmlFor="sizeSelect">옵션</label>
                    <select id="sizeSelect">
                        {setSize && setSize.map((opt, idx)=>(
                            <option key={idx} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className="detailBtns">
                    <button className="cartBtn">장바구니</button>
                    <button className="buyBtn">구매하기</button>
                </div>
            </DetailPage>

        </div>

    )

}

const DetailPage = styled.div`
    
`