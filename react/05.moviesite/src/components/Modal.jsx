import { useNavigate, useParams } from "react-router-dom"
import { getModalDetail } from "../axios/Axios";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";


export default function Modal(movie, type){

    const {movieId} = useParams();
    const navigate = useNavigate();

    const mediaType = movie.media_type === 'tv';

    const {data, isLoading, error} = useQuery(
        ['detail', mediaType],
        () => getModalDetail(movie.id, mediaType ? 'tv' : 'movie'),{
            staleTime: 5000
        }
    );

    return (
        /*
        AnimatePresence
        framer-motion에서 제공하는 애니메이션 컴포넌트로 마운트와 언마운트시 애니메이션을 정용할 수 있게 해주는 컴포넌트(기본적으로 리액트에서는 페이지가 변경될때 애니메이션을 적용할 수 없다.)
        */
        <AnimatePresence>
            {movieId ? (
                <ModalContainer animate={{opacity : 1}} exit = {{opacity: 0}}>
                <motion.div 
                    className = 'modalContent'
                    transition = {{duration : 0.5}}
                >
                    <div className="modalBg">
                        <img src = {`https://image.org/t/p/w500${movie.backdrop_path}`}/>
                    </div>

                </motion.div>
                </ModalContainer>
            ) : null}

        </AnimatePresence>
    )
}

const ModalContainer = styled(motion.div)`
    position: flxed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    max-height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    box-sizing: border-box;
    
    
.modatContent{
    position: relative;
    width: 50%;
    max-height: 100vh;
    background: gray;
    z-index: 999;
    overflow: hidden;
}

    `
    