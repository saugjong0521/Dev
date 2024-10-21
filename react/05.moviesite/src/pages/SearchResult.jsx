import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom"
import instance from '../axios/axios';


export default function SearchResult (){
    const navigate = useNavigate();
    // const {movieId}

    const location = useLocation()
    const keyWord = location.state.keyword
    const {isLoading, error, data} = useQuery(['search', keyword], ()=> instance.getSearch(keyword))
    return (
        <>
        </>
    )
}