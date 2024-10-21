import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import instance from '../axios/axios';
import MovieCard from "../components/MovieCard";


export default function SearchResult (){
    const navigate = useNavigate();
    // const {movieId}

    const location = useLocation()
    const keyWord = location.state.keyword
    const {isLoading, error, data} = useQuery(['search', keyword], ()=> instance.getSearch(keyword))
    return (
        <>
            {(!data || data.length === 0)} && <div>검색 결과가 없습니다.</div>

            {data} && (
                <ResultContainer className = 'on'>
                    <div className="searchWrapper">
                        <h3>{keyword}로 검색한 결과입니다.</h3>
                        <div className="searchList">
                            {data.map((moviem,idx) => {
                                <MovieCard
                                key = {moviem.id}

                            })}

                        </div>
                    </div>

                </ResultContainer>
            )
        </>
    )
}