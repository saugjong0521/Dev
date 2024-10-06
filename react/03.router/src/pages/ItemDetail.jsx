import { useParams } from "react-router-dom"


export default function ItemDetail (){

    const {id} = useParams();
    console.log(id)
    //path에서 전달된 id를 useParams로 전달받음

    return (
        <>
        
        </>
    )

}