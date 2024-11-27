import Image from "next/image";
import styles from "./page.module.css";
import bgImage from "../../public/images/bg.jpg"

/*
Image 컴포넌트

일반적으로 사용하는 img태그도 넥스트에서 사용할수는 있지만 Image 컴포넌트의 경우 넥스트에서 최적화되어있다.

nextJs에서 Image컴포넌트
- 자동으로 최적화기능: 사용중인 기기에 맞는 크기로 이미지를 업로드
- 지연로딩: 화면에 보이는 이미지부터 로드
- 포맷관리: 이미지 포맷을 jpg가 아닌 webp로 관리

image 컴포넌트에 사용되는 속성
src: 이미지 경로 (외부 url, import된 파일)
alt: 이미지 대체 텍스트
wigth & height: 가로 & 세로 사이즈(반응형에서는 비율로 인식)
layout{
  responsive: 부모 컨테이너의 너비를 기준으로 크기 조정, 비율 유지
  fixed: 지정된 width와 height를 고정값으로 사용
  fill: 부모요소를 채우며 비율을 조정
  intrinsic: 이미지의 원본 크기를 기준으로 비율 유지(기본값)
}
objectfit: 이미지가 부모 컨테이너 안에서 크기를 맞추는 기준 설정(cover, contain)
priority: 이미지를 로드할때 우선적으로 로드하도록 설정
placeholder: 이미지가 로드될때 어떻게 표시해줄지 정하는 속성 (blur, empty 존재)
  - blur: 뿌옇게 처리
  - emply: 아무것도 표시하지 않음
quality: 이미지 품질 1~100사이의 값 표시, 기본값 75
loading: 이미지 로딩방식 설정
  - lazy: 화면에 보일때 로드(기본값)
  - eager: 페이지 로드와 동시에 로드
  - unoptimized: 최적화 제외
sizes: 브라우저의 크기에 따라서 이미지의 크기를 정함
srcset: 브라우저 크기에 따라 이미지가 변경

*/


export default function Home() {
  return (
    <>
      {/* 로컬 이미지 불러오기 */}
      <img src="../public/images/bg.jpg" width={600} height={400} alt="bg1"/>
      
      {/* public에 저장하고 이미지 가져오기 */}
      <Image src={bgImage} alt="bg" width={600} height={400}/>

      {/* 외부 경로에 있는 이미지 가져오기 */}
      <Image src="https://images.unsplash.com/photo-1732601471612-213023f569d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      alt="image1"
      width={600} height={400}
      />

      {/* 이미지컴포넌트 반응형 작업 */}
      <Image src="https://images.unsplash.com/photo-1732601471612-213023f569d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      alt="img2"
      layout="responsive"
      width = {16}
      height = {9}
      sizes = "(max-width: 768px) 500px, (max-height: 1024px) 50vw, 33vw"
      // layout="reponsive가 되면 width와 height는 값이 아닌 비율로 변경"
      />


      <Image src="https://images.unsplash.com/photo-1732601471612-213023f569d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
      sreset="https://images.unsplash.com/photo-1732530361158-09f4154b6b3b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
      width={1600}
      height={900}
      sizes="(max-width: 768px) 100vw, 50vw"
      alt="img3"
      />

    </>

  );
}
