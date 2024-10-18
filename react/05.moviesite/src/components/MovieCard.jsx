import { motion } from 'framer-motion'
import styled from 'styled-components';
import { FaPlay, FaPlus, FaArrowDown } from "react-icons/fa";
import Button from './Button';
import { AiOutlineLike } from "react-icons/ai";


export default function MovieCard({ movie, id, hoverId, imgVariants, infoVariants, getRating, setHoverId, getGenresNames }) {
    const rating = getRating(movie.adult)
    const genreNames = getGenresNames(movie.genre_ids);
    return (
        <MovieItem>
            <motion.div 
                className='sliderList'
                initial="initial"
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
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
                    </div>
                    <div className="infoWrapper">
                        <div className="btnsWrapper">
                            <div>
                                <FaPlay />
                                <FaPlus />
                                <AiOutlineLike />
                            </div>
                            <Button>
                                <FaArrowDown/>
                            </Button>
                        </div>{/*btnsWrapper */}
                        
                        <div className='infoGenres'>
                            <p>{rating}</p>
                            <p>{genreNames}</p>
                        </div>
                        
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

    .sliderInfo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .infoWrapper{
            display: flex;
            width: 100%;
            padding: 12px;
            box-sizing: border-box;
            flex : 12;

            .btnsWrapper{
                display: flex;
                justify-content: center-between;
                align-items
                div{
                    display: flex;
                    gap: 4px;
                }
                button{
                    width : 24px;
                    height: 24px;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    border-radius: 100%;
                }
            }

            .infoGenres{
                color : #fff;
                font-size: 12px;
                display: flex;
                gap: 4px;
                flex-direction: column;
            }
        }
    }

`