import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
