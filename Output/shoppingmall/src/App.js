import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Outlet/>
    </>
  );
}

export default App;
