import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion"
import { useState } from "react";
import styled from "styled-components";


/*
framer-motion
=> yarn add framer-motion

react에서 사용하는 애니메이션 생성 라이브러리
리액트의 특성상 생명주기를 기반으로 하는 컴포넌트를 불러오는 방식이기 때문에, 애니메이션이 연결될때
일반적으로 사용하는 css속성을 기반으로 컨트롤

사용하는 속성
initial = 초기값
animate = 컴포넌트가 동적인 상태를 통해서 최종적으로 변경될 속성 값

*/


export default function Search (){

    const [searchOpen, setSearchOpen] = useState(false);

    const handleClickEvent =() =>{
        setSearchOpen((open) => !open)
    } 

    return(

            <SearchForm>
                <motion.div
                    initial = {{width : 50}}
                    animate = {{
                        width : searchOpen ? 300 : 50,
                        transition : {duration: 0.3},
                    }}
                    
                >
                    
                    <button type="button" className="search-btns" onClick={handleClickEvent}>
                        <BsSearch />
                    </button>

                    <input type="text"></input>

                </motion.div>
            </SearchForm>

    )

}

const SearchForm = styled.form`
    display: flex;
    position: relative;
    top: 0;
    left: 0;

    div{
        border: solid 1px #fff;
        padding: 5px;
        box-sizing: border-box;
    }
    .search-btns{
        color:#fff;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
