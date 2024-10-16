import { useEffect } from "react"


export default function MovieSlider(){
    
    useEffect(()=> {
        const fetchGenres =async () =>{
            const genreData =awsit getGenre();
            const genreMap =genreData.reduce((acc,genre)=>{
                acc[genre.id] =genre.name
            })
        }
    })
    
    return(
        <></>
    )
}