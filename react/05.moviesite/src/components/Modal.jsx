import { useNavigate, useParams } from "react-router-dom"


export default function Modal(movie, type){

    const {movieId} = useParams();
    const navigate = useNavigate();

    const mediaType = movie.media_type === 'tv';

    return (
        
        <>
        
        </>

    )

}