
/*
테일윈드 사용법
워드프레스처럼 별도의 css파일을 작성해서 관리하지 않고, 적용할 css가 적용된 클래스명을 찾아서 적용하는 방식
(클래스의 정리는 공식 홈페이지 https://tailwindcss.com/docs/installation)

장점
코드 자체가 깔끔하게 사용할 수 있음

단점
클래스명을 직접 찾아서 작성해야 하기 때문에 진입 장벽이 다른 css방식에 비해 있음

사용법
yarn add -D package = 패키지설치 D는 DEV Dependenci의 약자
yarn tailwind init -p

tailwind.config.js에서   content: ["./src/** /*.{js,jsx,ts,tsx}"], 수정

글로벌 css나 최상위 css파일에 
@tailwind base;
@tailwind components;
@tailwind utilities;
선언

base
- 기본 스타일을 포함 (reset과 같은 기능)

components
- 테일윈드에서 제공하는 컴포넌트나 클래스 기반의 스타일을 적용할 수 있게 하는 파일

utilities
- 클래스가 포함된 css를 불러와서 적용할수 있게 해주는 파일


커스텀 클래스 생성
tailwind.config.js 안의 theme에 작성
주의할 점은 theme안에 바로 작성하게 되면 기본적으로 제공하는 css들이 적용되지 않게 되는 문제가 생긴다.
=> extends 안에서 작성

*/



export default function TailWind () {


    return(

        <>

        <div className="flex bg-gray-50">
            <div className="basis-48 bg-lime-100 text-3xl text-myColor-100 p-72">box</div>
        </div>
        
        </>

    )

}