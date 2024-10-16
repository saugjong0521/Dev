import { useEffect, useState } from "react"
import styled from "styled-components"
import { getMovies } from "../axios/Axios";
import MainVideo from "../components/MainVideo";
import MovieSlider from "../components/MovieSlider";
import {useQuery} from "react-query"


export default function Main (){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const res = await getMovies('now_playing')
            if(res){
                setMovies(res)
            }
        }
        fetchMovies();
    }, [])
    

    const {
        data : action,
        isLoading : isActionLoading,
        error : actinError
    } = useQuery(['movies','28'], ()=>getMovieGenre('28'),{
        stateTime : 5000
    })
    
    /*
    *useQuery

    서버에서 데이터를 가져오고 캐싱을 가져오고 업데이트 하게 해주는 라이브러리
    로딩, 오류, 데이터 캐싱, 자동 갱신을 지원한다.
    */


    return(
        <>
        <MainVideo/>
        <MovieSlider movies={action} title='액션 장르'/>
        </>

    )

}

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const MovieItem = styled.div`
    background: gray;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 10px;
    max-width: 400px;

    h3{
        font-size: 20px;
        margin-bottom: 10px;
        color: #fff
    }
    p{
        color:#fff;
        font-size: 14px;
    }

`
