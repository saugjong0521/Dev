import { useEffect, useState } from "react"
import styled from "styled-components"
import { getMovies } from "../axios/Axios";


export default function Main (){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const res = await getMovies(12)
            if( res && res.data ){
                console.log(res.data)
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