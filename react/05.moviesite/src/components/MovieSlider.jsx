import { useEffect, useState } from "react"
import { getGenre } from "../axios/Axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper/modules"
import styled from "styled-components";

//스와이퍼 css
import 'swiper/css';
import 'swiper/css/navigation';
import MovieCard from "./MovieCard";

export default function MovieSlider ({movies, title}){
    const [genres,setGenres] = useState({})
    const [hoverId, setHoverId] = useState(null)

    const imgVariants = {
        initial : {
            scale : 1,
        },
        hover : {
            scale : 1.5,
            transition : {
                duration : 0.5
            }
        }
    }

    useEffect(()=> {
        const fetchGenres =async () =>{
            const genreData =await getGenre();
            const genreMap =genreData.reduce((acc,genre)=>{
                acc[genre.id] =genre.name
                return acc;
            },{})
            setGenres(genreMap)

        }
        fetchGenres();
    },[])

    const getGenresNames = (genreId) => {
        return genreId.map(id => genres[id]).join(', ')
    }
    
    return(
        <MovieSliderItem>
            <h2 className="movieTitle">{title}</h2>
            <Swiper 
                modules={[Navigation]}
                spaceBetween ={40}
                slidesPerView = {6}
                navigation
                >
                    {movies.map((movie, id) => {
                        <SwiperSlide key ={movie.id}>
                            <MovieCard 
                                movie={movie}
                                id={id}
                                hoverId = {hoverId}
                                setHoverId = {setHoverId}
                                imgVariants = {imgVariants}
                                getGeneresNames = {getGenresNames}
                            >

                            </MovieCard>
                        </SwiperSlide>
                    })}
            </Swiper>
        </MovieSliderItem>
    )
}
const MovieSliderItem = styled.div`
    padding: 40px 60px;
    box-sizing: border-box;

    .movieTitle{
        font-size: 40px;
        color: #fff;
        position: relative;
        margin-bottom: 24px;
    }
`
