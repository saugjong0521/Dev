import { useContext } from "react";
import { ThemeContext } from "./Darkmode";



export default function DarkmodeBtn (){

    const [theme, toggleTheme] = useContext(ThemeContext)
    console.log(theme)

}