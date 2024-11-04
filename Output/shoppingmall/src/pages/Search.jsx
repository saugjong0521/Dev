import { useState } from "react"


export default function Search(){

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    return(
        <div className="container">
            <input type="text" value={query}/>
            <ul className="productList">
                {result.map((el)=>(
                    

                ))}
            </ul>
        </div>
    )

}