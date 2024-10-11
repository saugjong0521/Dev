import { BsSearch } from "react-icons/bs";

/*
framer-motion
=> yarn add framer-motion

react에서 사용하는 애니메이션 생성 라이브러리
리액트의 특성상 생명주기를 기반으로 하는 컴포넌트를 불러오는 방식이기 때문에, 애니메이션이 연결될때
일반적으로 사용하는 css속성을 기반으로 컨트롤

*/


export default function Search (){

    return(

            <SearchForm>
                
                
                <button type="button" className="search-btns">
                    <BsSearch />
                </button>



            </SearchForm>

    )

}