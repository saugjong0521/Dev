import { motion } from 'framer-motion'
import styled from 'styled-components';
import { FaPlay, FaPlus, FaArrowDown } from "react-icons/fa";
import Button from './Button';
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


export default function MovieCard({ movie, id, hoverId, type, rate, imgVariants, infoVariants, getRating, setHoverId, getGenresNames, movieLength }) {
    const rating = getRating(movie.adult)
    const genreNames = getGenresNames(movie.genre_ids);
    
    const navigate = useNavigate();
    
    const handleModal = (movieId) => {
        navigate(`${type}/${movie.id}/`)
    }

    // console.log(movie.id)

    return (
        <MovieItem>
            <motion.div 
                className={`sliderList ${rate ? 'rate' : ''}`}
                initial="initial"
                whileHover='hover'
                //whileHover 
                onMouseEnter={() => setHoverId(movie.id)}
                onMouseLeave={() => setHoverId(null)}
                style = {{position : 'relative'}}
            >
                {rate && (
                    <div className={`rateNum ${id === movieLength - 1 ? 'last' : ''}`}>
                        {id + 1}
                    </div>
                )}
                <motion.div className='sliderImg' variants={imgVariants}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${rate ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}
                    />
                </motion.div>

                <motion.div className='sliderInfo' variants={infoVariants}>
                    <div className='infoImg'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
                    </div>
                    <div className="infoWrapper" onClick={handleModal(movie.id)}>
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
        z-index: 99;

        .infoWrapper{
            display: flex;
            width: 100%;
            padding: 12px;
            box-sizing: border-box;
            flex : 12;

            .btnsWrapper{
                display: flex;
                justify-content: center-between;
                align-items: center;
                color: white;

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

    //rate ver
    .sliderList.rate .rateNum{
        position: absolute;
        top: 0;
        left: 0;
        line-height: 200px;
        font-size: 300px;
        color: #000;
        -webkit-text-stroke: 4px gray;
        -webkit-text-fill-color: #000;
    }

    .sliderList.rate .rateNum.last{
        letter-spacing: -50px;
    }


    .sliderList.rate .sliderImg{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .sliderList.rate .sliderImg img{
        object-fit: cover;
        width : 160px;
        height: auto;
        position: relative;
    }


`