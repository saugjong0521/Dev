import { useEffect, useState } from "react"
import { getMainVideos, getMovies } from "../axios/Axios";
import styled from "styled-components";


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
                const videos = await getMainVideos(randomVideo.id);
                
                console.log(videos[0].key)
            } catch (error){
                console.log(error)
            }
        }
        MovieData();
    }, [])

    return (

        <MainVideoContainer>
            <VideoWrapper>
                <ReactPlayer
                    url = {`https://youtube.${videoKey}`}
                    muted = {true}
                    controls = {false}
                    width = '100%'
                    height = '100%'
                    playing = {true}
                />
            </VideoWrapper>
        </MainVideoContainer>

    )

}

const MainVideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
`
const ReactPlayer =styled.div`
    
`