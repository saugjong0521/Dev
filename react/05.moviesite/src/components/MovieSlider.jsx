import { useEffect, useState } from "react"
import { getGenre } from "../axios/Axios";
import { Swiper } from "react"
import { Navigation} from "swiper/modules"

//스와이퍼 css
import 'swiper/css';
import 'swiper/navigation'

export default function MovieSlider ({movies, title}){
    const [genres,setGenres] = useState({})

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
            <Swiper modules={{Navigation}}
                spaceBetween ={40}
                slidesPerView = {6}
                navigation
                >
                    {movies.map((movie, id) => {
                        <SwiperSlide key ={movie.id}>
                            <img src={`https://image/tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}/>
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