import { useNavigate, useParams } from "react-router-dom"
import { getModalDetail } from "../axios/Axios";


export default function Modal(movie, type){

    const {movieId} = useParams();
    const navigate = useNavigate();

    const mediaType = movie.media_type === 'tv';

    const {data, isLoading, error} = 
        ['detail', mediaType],
        () => getModalDetail
        stateModalDetail ()

    return (
        
        <>
        
        </>

    )

}