import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Outlet/>
    </QueryClientProvider>
    </>
  );
}

export default App;
