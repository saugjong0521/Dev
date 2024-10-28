import styled from "styled-components";
import { formatCurrency } from "../api/Firebase";


export default function DetailPageEvent({product}){

    const colorItem = product.colors;

    return(

        <DetailItem>
            <img src={product.img}/>
            <div className="textWrap">
                <h3>{product.title}</h3>
                <div className="itemFlex">
                    <p className="itemPrice">{formatCurrency(product.price)}원</p>
                    <p className="itemSize">{product.size}</p>
                </div>
                <div className="itemColor">
                    {colorItem && colorItem.map((color, idx)=>(
                        <div key={idx} style={{backgroundColor: color}}></div>
                    ))}
                </div>
            </div>
        </DetailItem>

    )
}

const DetailItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .textWrap{
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3{
            font-size: 20px;
            font-weight: 700;
            transition: 500ms;
            color: rgba(0,0,0,0.5);
            &:hover{
                color: rgba(0,0,0,1)
            }
        }
        .itemFlex{

        }
    }
`