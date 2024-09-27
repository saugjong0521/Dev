



export default function ShoppingCart(){
    const item = [
        {id: 1,item1: 'item1', price: 5000},
        {id: 2,item1: 'item1', price: 5000},
        {id: 3,item1: 'item1', price: 5000},
        {id: 4,item1: 'item1', price: 5000},
        {id: 5,item1: 'item1', price: 5000},
        {id: 6,item1: 'item1', price: 5000},
        {id: 7,item1: 'item1', price: 5000},
        {id: 8,item1: 'item1', price: 5000},
        {id: 9,item1: 'item1', price: 5000},
        {id: 10,item1: 'item1', price: 5000},
    ]


    return (
        <>
        <h1>아이템 리스트</h1>
        {item.map((el)=>(
            <li key={el.id}>
                <p>{el.name}</p>
                <p>{el.price}</p>
            </li>
        ))}
        </>
    )

}