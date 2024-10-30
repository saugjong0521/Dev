import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { formatCurrency } from "../api/Firebase";


export default function ProductDetail (){

    const state = useLocation().state;
    console.log(state);
    const {id, img, price, size, color, descruotion, title} = state;

    return(

        <div className="container">
            <DetailPage>
                <div className="detailImg">
                    <img src={img} alt={title}/>
                </div>
                <div className="detailText">
                    <h3>{title}</h3>
                    <p className="price">가격<span>{formatCurrency(price)}</span>원</p>
                </div>
                <div className="description">
                    {description}
                </div>
            </DetailPage>

        </div>

    )

}

const DetailPage = styled.div`
    
`