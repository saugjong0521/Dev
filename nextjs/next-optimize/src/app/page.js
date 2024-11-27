import Image from "next/image";
import styles from "./page.module.css";
import bgImage from "..../public/images/bg.jpg"

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
      <Image src={bgImage} alt="bg" width={600} height={400}/>

      {/* 외부 경로에 있는 이미지 가져오기 */}
      <Image src="https://images.unsplash.com/photo-1732601471612-213023f569d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      width={600} height={400}
      />

      {/* 이미지컴포넌트 반응형 작업 */}
      <Image src="https://images.unsplash.com/photo-1732601471612-213023f569d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      layout="responsive"
      width = {16}
      height = {9}
      // layout="reponsive가 되면 width와 height는 값이 아닌 비율로 변경"
      />
    </>

  );
}
