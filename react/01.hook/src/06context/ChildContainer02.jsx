import { useContext } from "react"
import { ThemeContext } from "./Darkmode"


export default function ChildContainer02 (){

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
<>
<p>텍스트</p>
</>

    )
}