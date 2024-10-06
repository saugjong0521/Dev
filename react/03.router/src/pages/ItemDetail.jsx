import { useParams } from "react-router-dom"


export default function ItemDetail (){

    const {id} = useParams();
    console.log({id})
    //path에서 전달된 id를 useParams로 전달받음

    const item = {id: id, name: `item${id}`}

    return (
        <>
            <h1>상품명 {item.name}의 상세 페이지</h1>
            <p>{item.id}</p>
            <p>{item.name}</p>
        </>
    )

}