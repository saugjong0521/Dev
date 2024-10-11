import { BsSearch} from "react-icons/bs";
import { FiX } from "react-icons/fi";

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
    const [clearBtn, setClearBtn] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleClickEvent =() =>{
        setSearchOpen((open) => !open)
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
        setClearBtn(true);
    }

    return(

            <SearchForm>
                <motion.div
                    initial = {{width : 50}}
                    animate = {{
                        width : searchOpen ? 300 : 50,
                        borderColor : `rgba(255, 255, 255, ${searchOpen ? '1' : '0'})`,
                        transition : {duration: 0.3},
                    }}
                >
                    
                    <button type="button" className="search-btns" onClick={handleClickEvent}>
                        <BsSearch />
                    </button>
                    <motion.input type="text" className="search-bar"
                        initial = {{width : 0}}
                        animate = {{width : searchOpen ? 250 : 0}}
                        transition = {{duration : 0.3}}
                        placeholder = "검색어를 입력하세요"
                        value = {keyword}
                        onChange = {handleInputChange}
                        // onKeyDown = {handleInputKeyDown}
                    />

                    {clearBtn && (
                        <button className = 'clear-btn'><FiX /></button>
                    )}

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
        display: flex;
        border: solid 1px transparent;
        padding: 5px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
    }
    .search-btns{
        color:#fff;
        font-size: 24px;
        display: flex;
        align-items: center;
    }
    .search-bar{
        padding: 5px;
        color: #fff;
    }
    .clear-btn{
        color: #fff;
        font: 24px;
        display: flex;
        align-items: center;
    }
`
