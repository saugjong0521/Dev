import { BsSearch} from "react-icons/bs";
import { FiX } from "react-icons/fi";

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
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
    const inputRef = useRef();
    
    const [visible, setVisible] = useState(false);
    const searchRef = useRef();

    const handleClickEvent = () =>{
        setSearchOpen((open) => !open)

        setTimeout(() => {
            if(inputRef.current){
                inputRef.current.focus()
            }
        }, 300)
    };

    const handleInputChange = (e) => {
        const value = e.target.value
        setKeyword(value);
        setClearBtn(value !== '');
        //input창의 값이 비어있지 않다면 value !== '', true로 설정해서 clearbtn 활성
    }
    
    const handleClearEvent = (e) => {
        e.preventDefault();
        setClearBtn(false);
        setKeyword('');
    }

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if(searchRef.current && !searchRef.current.contains(event.target) && !keyword){
                setVisible(false);
                setSearchOpen(false);
                //searchRef.current && !searchRef.current.contains(e.target)
                //사용자가 searchRef가 참조하는 요소 외부를 클릭했는지 확인
                
                //!keyword
                //검색창에 keyword값이 있는지 확인

                //위 조건이 모두 만족이 되면 setVisible(false) 실행
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[keyword])
    /*
    mousedown과 click 이벤트의 차이

    mousedown 마우스가 눌리는 순간
    click 마우스 버튼 눌럿다 떼는 순간

    엔터를 치는 시점
    mousedown 상태에서 엔터를 입력하면 click 이벤트가 발생하기 전에 엔터를 친걸로 인식하므로
    mousedown이벤트를 발생했지만 폼 제출은 안하게 됨

    click상태에서는 엔터를 입력하면 이미 click이벤트가 발생 후 엔터키를 눌렀으므로 폼 제출이 됨

    이벤트 우선순위

    */


    return(

            <SearchForm visible={`${searchOpen}`} ref={searchRef}>
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
                        ref = {inputRef}
                        initial = {{width : 0}}
                        animate = {{width : searchOpen ? 250 : 0}}
                        transition = {{duration : 0.3}}
                        placeholder = "검색어를 입력하세요"
                        value = {keyword}
                        onChange = {handleInputChange}
                        // onKeyDown = {handleInputKeyDown}
                    />

                    {clearBtn && (
                        <button className = 'clear-btn' onClick={handleClearEvent}><FiX /></button>
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
