import Image from "next/image";
import styles from "./page.module.css";
// import bgImage from "../public/images/bg.jpg"

/*
Image 컴포넌트

일반적으로 사용하는 img태그도 넥스트에서 사용할수는 있지만 Image 컴포넌트의 경우 넥스트에서 최적화되어있다.

nextJs에서 Image컴포넌트
- 자동으로 최적화기능: 사용중인 기기에 맞는 크기로 이미지를 업로드
- 지연로딩: 화면에 보이는 이미지부터 로드
- 포맷관리: 이미지 포맷을 jpg가 아닌 webp로 관리

*/


export default function Home() {
  return (
    <>
      {/* 로컬 이미지 불러오기 */}
      {/* <Image src={bgImage} alt="bg" width={600} height={400}/> */}

      <Image src='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%BC%80%EC%9D%B4%ED%81%AC%EA%B0%80-%EB%86%93%EC%9D%B8-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%98%86%EC%97%90-%EC%99%80%EC%9D%B8-%ED%95%9C-%EB%B3%91-aYO2uaBlkoI'
      width={600} height={400}
      />
    </>

  );
}
