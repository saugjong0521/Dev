import { useEffect, useState } from "react"
import styled from "styled-components"
import { getMovies } from "../axios/Axios";


export default function Main (){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const res = await getMovies('now_playing')
            if( res && res.data ){
                console.log(res)
            }
        }
        fetchMovies();
    }, [])
    

    return(
        <>
            <MovieList>

            </MovieList>
        </>

    )

}

const MovieList = styled.div`
    
`