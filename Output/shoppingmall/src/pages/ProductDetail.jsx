import { useLocation } from "react-router-dom"


export default function ProductDetail (){

    const state = useLocation().state;
    console.log(state);

    return(
        <>
            <h1>디테일 페이지</h1>
        </>
    )

}