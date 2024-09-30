import { useContext } from "react";
import { ThemeContext } from "./Darkmode";



export default function DarkmodeBtn() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    console.log(theme)
    const darkMode = {
        backgroungColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    }

    return (
        <div style={darkMode}>
            <button onClick={toggleTheme}
                style={{
                    background: theme === 'light' ? 'black' : 'white',
                    color: 'gray'
                }}
            >
                {theme === 'light' ? 'dark로 변경' : 'light로 변경'}
            </button>
        </div>
    )

}