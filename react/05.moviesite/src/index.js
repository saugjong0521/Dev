import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import GlobalStyle from './style/GlobalStyle';
import Router from './router/Router';
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient ()//새로운 쿼리 클라이언트를 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <GlobalStyle/>
    <Router/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
