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
              <li><Link href='/product'>product</Link></li>
            </ul>
          </nav>
        </heder>
        { children }
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



랜더링 방식의 변경
nextJs는 페이지를 서버에서 html로 랜더링해서 브라우저에 전달하는 방식인 ssr방식을 채택하고 있다.
ssr(서버 사이드 랜더링)

리액트는 반대인 csr(클라이언트 사이드 랜더링) 랜더링 방식을 사용하고 있다.

ssr방식
서버에서 html을 미리 랜더링한 뒤 완전히 랜더링된 페이지를 브라우저에 전달

장점
- seo에 유리(서버에서 랜더링된 html을 브라우저마다 있는 검색엔진이 문서를 크로울링하는 방식에서 읽음)
- 로딩속도가 csr보다 빠름(미리 랜더링을 다 했기에)

단점
- 미리 로드할 데이터가 많은 경우, 서버 부하가 증가될 수 있음
- html을 먼저 다 로드한 뒤에 스크립트를 로드하는 방식(자바스크립트로 구현된 인터렉션 효과 적용속도가 느림)


csr방식
서버에서 빈 html문서와 스크립트 파일을 브라우저에 전달
요청받은 문서를 자바스크립트가 실행되면서 html을 불러오는 방식

장점
- 자바스크립트 기반의 인터렉션 효과의 적용이 빠름
- 페이지 전환 로딩은 ssr보다 빠름

단점
- 처음에 빈 html문서를 전달받아 크롤링하기 때문에 크롤링에 불리 (빈 페이지에 컴포넌트를 불러오는 방식이기에)
- 페이지 요청이 없으면 컨텐츠를 불러오지 않음
- 초기 로딩속도 느림

*/