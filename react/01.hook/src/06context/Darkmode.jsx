//다크모드 만들기

import { createContext, useState } from "react"
import DarkmodeBtn from "./DarkmodeBtn";
import ChildContainer from "./ChildContainer";


export const ThemeContext = createContext();    // 밖으로 값 전달


export default function Darkmode(){

    const [theme, setTheme] = useState('dark'); // 기본 세팅 값 설정


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light' )
    }


    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {/* Provider = context로 생성된 객체 안에 포함되는 컴포넌트들을 관리할 태그 */}
        <DarkmodeBtn/>
        {/* <ChildContainer/> */}

        </ThemeContext.Provider>
    )
}