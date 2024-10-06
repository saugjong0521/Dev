import { Link } from "react-router-dom";


export default function Header () {

    return (

        <>
        <h1>header</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/itemList'>ItemList</Link></li>
            </ul>
        </nav>
        </>

    )

}