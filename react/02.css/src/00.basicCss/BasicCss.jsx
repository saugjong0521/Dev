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