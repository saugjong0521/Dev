import { motion } from 'framer-motion'
import styled from 'styled-components';
export default function MovieCard({ movie, id, hoverId, imgVariants, infoVariants, setHoverId, getGenresNames }) {
    const genreNames = getGenresNames(movie.genre_ids);
    return (
        <MovieItem>
            <motion.div 
                className='sliderList'
                initia="initial"
                whileHover='hover'
                //whileHover 
                onMouseEnter={() => setHoverId(movie.id)}
                onMouseLeave={() => setHoverId(null)}
                style = {{position : 'relative'}}
            >
                <motion.div className='sliderImg' variants={imgVariants}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                </motion.div>

                <motion.div className='sliderInfo' variants={infoVariants}>
                    <div className='infoImg'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
                    </div>
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
        border-radius: 5px;
        cursor: pointer;
    }

`