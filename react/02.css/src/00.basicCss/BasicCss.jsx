import './BasicCss.css'
// 외부에서 작성한 css파일을 import해서 작성하는 방식
// 리셋css같은 파일은 최상위 컴포넌트에 연결해주면 된다. (index.jsx에 보통 연결)

export default function BasicCss() {

    const text = {
        color: 'pink',
        fontSize: '30px'
    }

    return (

        <div className="container">

            <h1 className="title">리액트 기본 css 작성 방식</h1>
            <p style={{ fontSize: '40px', backgroundColor: 'coral' }}>
                태그에 직접 작성하는 인라인 스타일 방식
            </p>
            <p style={text}>변수로 선언해서 객체로 전달하는 방식</p>

        </div>

    )
}

/*
인라인 스타일의 장단점
장점: 하나의 파일에서 관리할 수 있다.
단점: 코드가 복잡해질수록 가독성이 엄청 떨어지고, 관리가 힘들어진다.
인라인 스타일에서는 :hover, :focus, 미디어쿼리와 같은 가상요소를 사용할 수 없다.
-> css파일을 따로 작성해야 하기 때문에 불편하다.

 */