import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import instance, { getGenre, getSearch } from "../axios/Axios";
import MovieCard from "../components/MovieCard";
import { getGenreNames, getRating } from "../utils/MovieHelpers";
import styled from "styled-components";
import { useEffect, useState } from "react";


export default function SearchResult (){
    
    const imgVariants = {
        initial : {
            scale : 1,
            zIndex : 1,
        },
        hover:{
            scale : 1.2,
            transition : {
                duration : 0.5,
                zIndex : 9,
            }
        }
    }

    const infoVariants = {
        initial : {
            opacity : 0,
            scale : 1,
            zIndex : 1,
        },
        hover : {
            opacity : 1,
            scale : 1.5,
            zIndex : 99,
            transition : {
                duration : 0.5,
            }
        }
    }
    const [genres, setGenres] = useState({});

    useEffect(()=> {
        const fetchGenres = async() => {
            const genreData = await getGenre();
            const genreMap = genreData.reduce((acc,genre) => {
                acc[genre.id] = genre.name;
                return acc;
            }, {})
            setGenres(genreMap);
        }
        fetchGenres()
    },[])

    const getGenresNames = (genreId) => {
        return genreId.map(id => genres[id]).join(',')
    }

    const getRating = (adult) => {
        return adult ? '청소년불가' : '전체 관람가능'
    }


    const navigate = useNavigate();
    const [hoverId, setHoverId] = useState(null);

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const keyword = location.state.keyword || queryParams.get('keyword')
    const {isLoading, error, data} = useQuery(['search', keyword], ()=> getSearch(keyword))
    console.log(data)
    console.log(keyword)
    return (
        <>
            {(!data || data.length === 0)} && <h2 className="resultText">검색 결과가 없습니다.</h2>

            {data && (
                <ResultContainer className = 'on'>
                    <div className="searchWrapper">
                        <h3>{keyword}로 검색한 결과입니다.</h3>
                        <div className="searchList">
                            {data.map((movie,idx) => (
                                <MovieCard
                                key = {movie.id}
                                movie = {movie}
                                id = {idx}
                                rate = {movie.rate}
                                navigate = {navigate}
                                type = {movie.type}
                                setHoverId = {setHoverId}
                                imgVariants={imgVariants}
                                infoVariants={infoVariants}
                                getGenresNames={getGenresNames}
                                getRating={getRating}
                                movieLength={movie.left}
                                >

                                </MovieCard>
                            ))}
                        </div>
                    </div>
                </ResultContainer>
            )}
        </>
    )
}

const ResultContainer = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    padding: 20px;
    padding-top : 200px;
    box-sizing: border-box;
    .resultText{
        color: #fff;
        font-size: 60px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 100px;
    }
    .searchList{
        max-width: 70%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        gap: 40px 0px;
        > div {
            width: 30%;
        }
    }
`
