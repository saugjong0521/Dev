import { useEffect, useState } from "react"
import { SearchProducts } from "../api/Firebase";


export default function Search(){

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            if(query.trim() === ''){
                setResult([])
            } else{
                try{
                    const txt = await SearchProducts(query);
                    setResult(txt)
                }catch(error){
                    console.error(error)
                }
            }
        }
        fetchProducts()
    }, [query])

    const handleSearchEvent = (e) => {
        e.preventDefault();
        setQuery(e.target.value.toUpperCase())  // 입력한 값을 대문자로 변환
    }

    return(
        <div className="container">
            <input type="text" value={query} onChange={handleSearchEvent}/>
            <ul className="productList">
                {result.map((el)=>(
                    <li>{el.title}</li>

                ))}
            </ul>
        </div>
    )

}