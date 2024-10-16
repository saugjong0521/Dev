import { useEffect, useState } from "react"
import { getGenre } from "../axios/Axios";


export default function MovieSlider(){
    
    const [genres,setGenres] = useState({})

    useEffect(()=> {
        const fetchGenres =async () =>{
            const genreData =await getGenre();
            const genreMap =genreData.reduce((acc,genre)=>{
                acc[genre.id] =genre.name
                return acc;
            },{})
            setGenres(genreMap)

        }
        fetchGenres();
    },[])

    const getGenresNames = (genreId) => {
        return genreId.map(id => genres[id]).join(', ')
    }
    
    return(
        <></>
    )
}