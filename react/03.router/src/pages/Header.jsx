import { Link } from "react-router-dom";


export default function Header () {

    return (

        <>
        <h1>header</h1>
        <nav>
            <ul>
                <li><Link to='/login'>로그인</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/itemList'>ItemList</Link></li>

                <li><a href="https://www.naver.com">네이버</a></li>
                {/* 리액트에서도 a태그를 사용할 수 있지만, 외부링크를 참조할 때에만 사용한다. */}

            </ul>
        </nav>
        </>

    )

}