import {motion} from 'framer-motion'
import styled from 'styled-components'

export default function MovieCard(movie, id, hoverId, setHoverId, getGenresNames){
    const genreNames = getGenresNames(movie.genre_id)


    return (
        <MovieItem>
            <motion.div
                wheelHover = 'hover'
                onMouseEnter = {()=>setHoverId(movie.id)}
                onMouseLeave = {()=>setHoverId(null)}
            >

            </motion.div>
        </MovieItem>
    )
    
}

const MovieItem = styled.div`
    
`