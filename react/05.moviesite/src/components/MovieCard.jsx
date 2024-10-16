import {motion} from 'framer-motion'
import styled from 'styled-components'

export default function MovieCard(movie, id, hoverId, setHoverId, imgVariants, getGenresNames){
    const genreNames = getGenresNames(movie.genre_ids)


    return (
        <MovieItem>
            <motion.div
                className='sliderList'
                initial='initial'
                whileHover = 'hover'
                //whileHover 
                onMouseEnter = {()=>setHoverId(movie.id)}
                onMouseLeave = {()=>setHoverId(null)}
            >
                <motion.div className='sliderIng' variants={imgVariants}>
                    <img 
                        src={`https://image.tmdb/org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        />
                </motion.div>

            </motion.div>
        </MovieItem>
    )
    
}

const MovieItem = styled.div`
    .sliderList{
        position: relative;
    }
    .sliderList img{
        width: 100%;
        height: 100%;
    }
`