import { useEffect, useState } from "react"
import { getGenre } from "../axios/Axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper/modules"
import styled from "styled-components";

//스와이퍼 css
import 'swiper/css';
import 'swiper/css/navigation';
import MovieCard from "./MovieCard";

export default function MovieSlider({ movies, title, rate, type }) {
    const [genres, setGenres] = useState({})
    const [hoverId, setHoverId] = useState(null)


    const imgVariants = {
        initial : {
            scale : 1,
            zIndex : 1,
        },
        hover:{
            scale : 1.2,
            transition : {
                duration : 0.5,
                zIndex : 9,
            }
        }
    }

    const infoVariants = {
        initial : {
            opacity : 0,
            scale : 1,
            zIndex : 1,
        },
        hover : {
            opacity : 1,
            scale : 1.5,
            zIndex : 99,
            transition : {
                duration : 0.5,
            }
        }
    }


    useEffect(() => {
        const fetchGenres = async () => {
            const genreData = await getGenre();
            const genreMap = genreData.reduce((acc, genre) => {
                acc[genre.id] = genre.name
                return acc;
            }, {})
            setGenres(genreMap)

        }
        fetchGenres();
    }, [])

    const getGenresNames = (genreId) => {
        return genreId.map(id => genres[id]).join(', ')
    }

    //관람등급 표시
    const getRating = (adult) => {
        return adult ? '청소년불가' : '전체 관람가능'
    }

    return (
        <MovieSliderItem>
            <h2 className="movieTitle">{title}</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={6}
                navigation
            >
                {movies.map((movie, id) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard
                            movie={movie}
                            id={id}
                            rate={rate}
                            type = {type}
                            hoverId={hoverId}
                            setHoverId={setHoverId}
                            imgVariants ={imgVariants}
                            infoVariants = {infoVariants}
                            getGenresNames={getGenresNames}
                            getRating ={getRating}
                            movieLength = {movies.length}
                        >

                        </MovieCard>
                    </SwiperSlide>
                ))}
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

    .swiper{
        overflow: visible;
    }
`