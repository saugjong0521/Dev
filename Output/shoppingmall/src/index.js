import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AdminSection from './pages/AdminSection';
import { AuthContextProvider, useAuthContext } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ProtectRouter = ({checkAdmin, children}) => {
  const {user, isLoading} = useAuthContext();

  // 이전 페이지로 보내기
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const navigate = useNavigate();

  if(isLoading){
    return null
  }

  if(!user || (checkAdmin && !user.isAdmin)){
    // return <Navigate to='/' replace/>
    navigate('/',{replace : true, state:{from: location}})
  }
  return children
}

const routes = createBrowserRouter([
  {
    path: '/',
    element :     <AuthContextProvider><App/></AuthContextProvider>,
    errorElement : <NotFound/>,
    children : [
      { path: '/login', element: <Login/>},
      { path: '/admin', element: 
        <AdminSection/>
      // <ProtectRouter checkAdmin></ProtectRouter>
    },
      // children 은 중첩구조가 가능
      // e.g. children : [{ path: '/login', element: <Login/>, children : { path: '/page', element: <Page/> }},], 는 /home/login/page
    ]
  }

])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
