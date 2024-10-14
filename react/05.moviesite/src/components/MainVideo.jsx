import { useState } from "react"
import { getMovies } from "../axios/Axios";


export default function MainVideo () {

    const [videoKey, setVideoKey] = useState(null);
    const [randomMovie, setRandomMovie] = useState('');

    useEffect(() => {
        async function MovieData(){
            try {
                const movies = await getMovies('now_playing')
            }
        }

    }, [])

    return (
        <>
        </>
    )

}