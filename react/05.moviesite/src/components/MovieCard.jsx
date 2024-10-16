import {motion} from 'framer-motion'

export default function MovieCard(movie, id, hoverId, setHoverId, movieId, getGenresNames){
    const genreNames = getGenresNames(movie.genre_id)


    return (
        <MovieItem>
            <motion.div>

            </motion.div>
        </MovieItem>
    )
    
}

const MovieItem = styled.div`
    
`