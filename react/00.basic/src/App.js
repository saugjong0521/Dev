import logo from './logo.svg';
import './App.css';

/*
*react 파일 정리

node.js
- 패키징 관리 매니저 프로그램

yarn
- 페이스북에서 만든 패키징 매니저
- 설치 속도가 npm보다 빠름
- 오프라인 지원(한번 설치했던 패키지를 캐시로 남김 -> 캐시에 남아있는 패키지는 재설치할때에 온라인 여부를 판단하지 않고 오프라인에서도 설치할 수 있게 해줌)
- 보안성
- cli 사용성 (커맨드 명령어가 간결함)


* react 작성 방식

ssr(server-side-rendering)과 csr(client-side-rendering)
ssr
- 전통적으로 만들어지는 페이지를 의미
- 서버에서 페이지를 전달받아서 바로 랜더링하는 방식(완성된 페이지)
- html, css, script가 모두 구현된 상태의 페이지가 사용자에게 전달되는 방식
- 초기 로딩속도는 빠르고 seo에서도 유리함
- 초기속도가 빠르지만 업데이트 되면서 랜더링되는 경우, 모든 페이지를 새로 랜더링 되므로 속도저하 혹은 과부하의 원인
- 스크립트의 사용 빈도가 동적인 효과를 구현이 끝
csr
- vue나 react로 만들어지는 spa방식의 페이지를 의미
- 초기 랜더링 속도는 느리지만(한번에 모든 정보를 받아오므로) 업데이트 될 때에는 필요한 부분만 랜더링되기 때문에 과부하가 적고 속도가 빠름
- seo에서는 다소 불리한 위치

ssr과 csr을 같이 사용하는 방식
nextjs - react를 기반으로 하는 프레임워크
(리액트 개발을 좀 더 편하게)

* react vs vue
react - 자바스크립트 기반 ui제작 라이브러리
  리액트는 오직 ui만 구성을 목적으로 만들어진 틀이기 때문에, 상태관리나 라우팅 같은 개발요소들은 다른 라이브러리를 설치해서 사용해야 한다.
  다만, 사용자가 프로젝트에 맞게 필요한 요소들만 선택해서 사용할 수 있기 때문에 관리면에서 장점을 가짐
vue - 자바스크립트 기반 ui제작 프레임워크
  ui를 구성하는데 필요한 거의 모든 기능을 내장하고 있기 때문에 따로 추가적인 라이브러리의 설치가 필요하지 않다.
  다만, 문법이 정해져 있기에 상대적으로 습득이 필요


* react의 변경되는 점
문법
- jsx문법(javascript Xml 문법)
확장형 스크립트 문법, html과 비슷한 문법으로 사용하기에 난이도가 낮은 편
일반 스크립트 문법이 아니기 때문에 babel로 변환하는 작업이 필요

jsx문법 규칙
1. 컴포넌트(js, jsx문서)의 요소들은 반드시 하나의 부모태그만 있어야 함
  - react에서 가상의 dom이 컴포넌트를 감지할때 하나의 태그만 인식하도록 되어있기 때문
  - 보통 div로 감싸는 것이 일반적인데 깔끔한 코드를 원한다면 <> <\>(명칭: fragmnent)처럼 감쌀수도 있다.
2. 자바스크립트 표현식을 사용할 수 있다.
3. if문을 직접적으로 사용할 수 없다. (삼항연산자, and조건문(&&)을 더 많이 사용)
4. class대신 className으로 사용
5. 싱글태그도 반드시 닫혀 있어야 한다.
6. 인라인 스타일 기법을 사용
  - 인라인 스타일을 적용할 때에는 className을 사용할 수 없고 객체형태로 전달해야 한다.
  - key값에는 '-'을 사용할 수 없기 때문에 카멜기법으로 변환(e.g. font-size => fontSize)
7. 태그를 직접적으로 선택하지 말 것(선택자를 지정하는 것을 남발하지 말 것)
8. css 적용 방법
  - class에 css를 적용할 때에는 보통 css문서를 따로 만들어서 import후에 적용
  - 인라인 방식으로 적용할 때에는 style={{속성: 값}}으로 작성
  - 오브젝트 전달
  - 기타 모듈을 사용하는 방법 (scss, styled-component, tailwind)
9. 컴포넌트 파일명은 반드시 대문자로 시작할 것(약속)

*네이밍 규칙
모든 네이밍은 카멜기법을 기준
  - 디렉터리 폴더명은 소문자
  - 파일명은 대문자(컴포넌트 파일만)
  - 의미론적인 네이밍(이름이 길어져도 상관없음)

*/
function user(userState){
  if(userState === 'admin'){
    return <p>admin</p>
  } else if(userState === 'user'){
    return <p>user</p>
  } else {
    return <p>guest</p>
  }
}

function App() {

  const textStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'purple'
  }

  const name = '김성종';
  const userState = 'aaa'

  return (
    <>
      <p style={{width:'100px', height:"100px", backgroundColor:"pink"}}>리액트 스타일 기초</p>
      <p style={textStyle}>리액트 스타일 객체형태</p>
      <p style={textStyle}>{name}</p>{/* 변수 불러오기 */}
      {name === 'park' ? <p>yes</p> : <p>no</p> }{/* 삼항 연산자로 저건에 따라 다른 텍스트로 출력 */}
      {name === '김성종' && <p>{name}</p>}{/* &&조건문으로 텍스트 출력 */}
      {/* 주석은 {}로 감싸서 작성 */}
      {user(userState)}{/*if문을 직접적으로 작성할 수 없으므로 함수로 if문을 작성 후 출력 */}
      {userState === 'admin' ? (
        <p>admin State</p>
        ) : userState === 'user' ? (
          <p>user State</p>
        ) : (
          <p>guset State</p>
        )}
        {/* 연속 삼항 연산자의 경우 내부에서 작성할 수 있다는 장점이 있지만 코드가 복잡해지고 관리가 어려워지는 단점 때문에 함수로 따로 관리하는 편 */}
        
        <div className='box'>class는 자바스크립트 약속어이기 때문에 구분을 위해 className으로 변경</div>
    </>
  );
}

export default App;
