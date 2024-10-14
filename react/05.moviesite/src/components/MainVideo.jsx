import { useEffect, useState } from "react"
import { getMainVideos, getMovies } from "../axios/Axios";


export default function MainVideo () {

    const [videoKey, setVideoKey] = useState(null);
    const [randomMovie, setRandomMovie] = useState('');

    useEffect(() => {
        async function MovieData(){
            try {
                const movies = await getMovies('now_playing');  //메인 비디오에 들어갈 목록을 가져옴
                console.log(movies)

                const randomVideo = movies[Math.floor(Math.random() * movies.length)]
                console.log(randomVideo)

                setRandomMovie(randomVideo);
                const videos = await getMainVideos(randomMovie.id);

            } catch (error){
                console.log(error)
            }
        }
        MovieData();
    }, [])

    return (
        <> 
        </>
    )

}