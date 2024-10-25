import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Outlet/>
    </AuthContextProvider>
    </>
  );
}

export default App;
