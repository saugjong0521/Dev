import { useLocation } from "react-router-dom"
import styled from "styled-components";


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
            </DetailPage>

        </div>

    )

}

const DetailPage = styled.div`
    
`