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
import CategoryPages from './pages/CategoryPages';
import ProductDetail from './pages/ProductDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyCart from './pages/MyCart';
import Register from './pages/Register';
import Search from './pages/Search';
import WritePage from './pages/WritePage';
import QnA from './pages/QnA';
import QnADetailPage from './pages/QnADetailPage';
import AdminPage from './pages/AdminPage';
import ProductEdit from './pages/ProductEdit';

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
    return <Navigate to='/' replace/>
  }
  return children
}

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: '/',
    element :     
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </QueryClientProvider>,
    errorElement : <NotFound/>,
    children : [
      { path: '/login', element: <Login/>},
      { path: '/register', element: <Register/>},
      { path: '/product/:category', element: <CategoryPages/> },
      // category 앞에 ':'를 붙임으로서, 매개변수로 만듬
      { path: '/product/detail/:id', element: <ProductDetail/>},
      { path: '/search', element: <Search/>},
      { path: '/cart', element: <MyCart/> },
      { path: '/board/qna', element: <QnA/> },
      { path: '/board/write', element: <WritePage/> },
      { path: '/board/qna/:id', element: <QnADetailPage/> },
      { path: '/admin/edit', element: <ProductEdit/> },
      { path: '/admin', element: 
      <ProtectRouter checkAdmin>
                <AdminPage/>
      </ProtectRouter>
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
