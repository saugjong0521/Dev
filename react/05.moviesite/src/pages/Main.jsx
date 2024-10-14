import { useEffect, useState } from "react"
import styled from "styled-components"
import { getMovies } from "../axios/Axios";


export default function Main (){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const res = await getMovies('now_playing')
            if(res){
                console.log(res)
            }
        }
        fetchMovies();
    }, [])
    

    return(
        <>
            <MovieList>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieItem key = {movie.id}>
                            <h3>{movie.title}</h3>
                            <p>{release_date}</p>
                        </MovieItem>
                    ))
                ) : (
                    <p>영화 데이터를 불러오고 있습니다.</p>
                )}
            </MovieList>
        </>

    )

}

const MovieList = styled.div`
    
`

const MovieItem = styled.div`
    

`

const release_date = styled.div`
    
`