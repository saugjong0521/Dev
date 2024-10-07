import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';

/*

todoList
-상태의 업데이트 기능
(
목록을 입력하면 목록 리스트에 추가
체크를 하게 되면 완료된 리스트로 분류
삭제 기능

useState, useEffect
)

*/

function App() {
  return (
    <>
      <TodoContainer/>
    </>
  );
}

export default App;
