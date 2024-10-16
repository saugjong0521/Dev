import { useEffect, useState } from "react"
import { getMainVideos, getMovies } from "../axios/Axios";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {motion} from 'framer-motion'


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

                if(videos.length > 0){
                    setVideoKey(videos[0].key)
                } else {
                    console.log(videos[0].key)
                }
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
                    url = {`https://youtu.be/${videoKey}`}
                    muted = {true}
                    controls = {false}
                    width = '100%'
                    height = '100%'
                    playing = {true}
                />
            </VideoWrapper>
            <VideoInfoWrapper>
                <motion.h2 initial = {{
                    trabsform : 'scale(1.3)',
                    transformOrigin : 'left bottom', 
                }}
                animate = {{
                    transform : 'scale(1)' 'translateY(50px)',
                    transition : {delay: 3, duration : 1}
                }}
                {RandomMovie.title}
                ></motion.h2>
            </VideoInfoWrapper>
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
const VideoInfoWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform:
`