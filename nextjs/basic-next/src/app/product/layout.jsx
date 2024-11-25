

/*
특정 페이지 폴더 안에 layout.jsx 파일을 생성한 경우,
해당 페이지 안에서 공통적으로 사용되는 레이아웃이 자동으로 설정된다.

항상 layout.jsx으로 설정하게 되면, {children}으로 공통 랜더링 설정을 해주면 된다.

*/

import Link from "next/link";

export default function ProductLayout({children}){
    return(
        <>
        <nav>
            <ul>
                <li><Link href="/product/women">여성복</Link></li>
                <li><Link href="/product/men">남성복</Link></li>
                <li><Link href="/product/kids">어린이옷</Link></li>
            </ul>
        </nav>
        <div>
            {children}
        </div>
        </>
    )
}