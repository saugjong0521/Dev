import { useContext } from "react";
import { ThemeContext } from "./Darkmode";



export default function DarkmodeBtn (){

    const [theme, toggleTheme] = useContext(ThemeContext)
    console.log(theme)

    return (
        <div style={darkMode}>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )

}