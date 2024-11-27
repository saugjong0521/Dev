import localFont from "next/font/local";
// 구글폰트에서 폰트 import하기
import {Jaro} from "next/font/google";
import "./globals.css";

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

const jaro = Jaro({subsets: ["latin"]})
/*
import {Jaro} from "next/font/google";
Jaro라는 이름은 폰트 자체 고유이름이기 때문에, 변경이 불가능하고 대소문자를 구별해야 한다.
*구글폰트에 있어도 nextfont에는 없는 경우가 있다.(에러가 출력됨)

const jaro를 사용하여 Jaro로 불러온 폰트를 설정
subsets: 웹 폰트에서 특정 문자만 불러오도록 지정(로딩시간을 줄이기 위함)
한글: korean
영어권: latin
*/

// local폰트
const sunshiney = localFont({
  src: "../public/fonts/Sunshiney-Regular.woff2",
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jaro.className}`}>
        {children}
      </body>
    </html>
  );
}


/*
nextJs에서 폰트 적용하는 방법

구글폰트를 이용하는 방법

넥스트 폰트
- nextJS는 개발자가 원하는 폰트를 자체적으로 호스팅하고, 이를 최적화해주는 기능 제공
- 외부 네트워크에 대한 의존성을 제거하므로, 성능에 일정부분 영향

자동으로 폰트의 최적화
-nextJs 10버전(14버전) 이상에서는 googlefont를 제공해서 폰트를 자동으로 최적화
(폰트를 자동으로 사전에 로드하고, 최소한의 자원을 사용해서 페이지 성능을 향상)
로딩방법:  nextJs는 font-display: optional과 같은 css속성을 이용해서 *foit또는 *fout를 최소화

> foit(flash of invisible text)
웹 폰트가 로드될때까지 보이지 않는 현상
> fout(flash of unstyle text)
웹 폰트가 로드되는 동안 사용자에게 시스템폰트(기본폰트)로 보여주는 현상
- 대체적으로 foit보다 fout을 좀 더 선호한다. 사용자가 컨텐츠를 더 빨리 접할 수 있고, 경험적인 측면에서 더 좋기 때문.

font-display: opational => 글꼴 랜더링 방법
auto, block, swap, fallback, optional
auto: 브라우저의 기본 동작
block: 글꼴이 다운되기 전까지 글자를 숨기다가, 로드가 완료되면 보이게 해줌
swap: 글꼴이 다운되기 전에는 브라우저 기본글꼴이다가, 로드되면 적용해서 보이게 해줌
fallback: 일정 시간동안 글자를 숨기다가, 특정 시간이 지나기 전에 글꼴이 로드되면 폰트에 적용
optional: 네트워크 상황에따라 브라우저가 글꼴 다운로드 여부를 판단, 재방문시 캐시를 이용해서 기존에 적용되었던 웹 폰트가 적용


*/