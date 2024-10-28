import { useParams } from "react-router-dom"


export default function CategoryPages(){

    const {category} = useParams();

    return (
        <h1>{category}</h1>
    )

}