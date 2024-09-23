import logo from './logo.svg';
import './App.css';

/*
hook
컴포넌트에서 상태(state)와 생명주기(lifecycle)의 기능을 사용할 수 있게 하는 요소



*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
