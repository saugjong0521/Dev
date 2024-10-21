import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom"


export default function SearchResult (){
    const navigate = useNavigate();
    // const {movieId}

    const location = useLocation()
    const keyWord = location.state.keyword
    const {isLoading, error, data} = useQuery('search')
    return (
        <>
        </>
    )
}