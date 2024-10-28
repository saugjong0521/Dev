

export default function DetailPageEvent({product}){

    const colorItem = product.colors;

    return(

        <DetailItem>
            <img src={product.img}/>
            <div className="textWrap">
                <h3>{product.title}</h3>
                <div className="itemFlex">
                    <p className="itemPrice">{product.price}</p>
                    <p className="itemSize">{product.size}</p>
                </div>
            </div>


        </DetailItem>

    )
}