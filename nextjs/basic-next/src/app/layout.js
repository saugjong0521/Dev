import localFont from "next/font/local";
import "./styles/globals.css"
import styles from "./styles/layout.module.css"
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* {children} */}
        <heder className={styles.header}>
          <h1>로고</h1>
          <nav className={styles.gnb}>
            <ul>
              <li><Link href='/about'>About</Link></li>
            </ul>
          </nav>
        </heder>
        {children}
      </body>
    </html>
  );
}


/*
nextJs에서 달라지는 것들
- src 폴더가 중요해지지는 않는다.
(프로젝트의 규모가 커지면 폴더링을 쉽게 구분하기 위해 가지고 있는 경우가 있음)
폴더링의 최상위 루트로 사용되기 때문에 선택사항

라우팅 기본 탑재
app폴더 안에 생성된 폴더명은 라우터 주소가 되고,내부폴더에 있는 page.jsx파일을 랜더링 하는 방식 page.jsx, index.jsx

폴더 단위로 페이지를 관리하기 때문에 대규모 프로젝트나 관리 면에서 장점이 있다.

폴더와 파일명을 기반으로 url 경로를 자동으로 생성해서 설정해주는 방식을 '스태틱 라이팅'이라고 한다.

특징
- 자동으로 url매핑
- 간단하고 직관적
- 페이지를 추가하거나 구조를 변경하고 싶을때 단순하게 파일이나 폴더를 추거하거나 이름을 변경하면 된다.
- 동적 라우팅 지원: 파일이나 폴더명에 []사용해서 작성한다.
page/item/[id].jsx로 설정하면 [id는]는 특정한 값을 받아서 페이지에 출력해주는 역할을 함

css에서는 module.css를 사용한다.
styles 폴더를 생성후 global.css를 작성하면 전체적으로 관리할 수 있다.
즉, 개별적 관리는 module.css, 전체적 관리는 global.css를 사용
*/