import { useLocation } from "react-router-dom"


export default function ProductDetail (){

    const state = useLocation().state;
    console.log(state);

    return(

        <div className="container"></div>

    )

}