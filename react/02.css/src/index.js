import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicCss from './00.basicCss/BasicCss';
import StyledCom from './02.styledComponents/StyledCom';
import GlobalStyle from './02.styledComponents/GlobalStyle';
import Scss from './03.scss/Scss';
import TailWind from './04.tailWind/TainWind';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    {/* <App /> */}
    {/* <BasicCss/> */}
    {/* <StyledCom/> */}
    {/* <Scss/> */}
    <TailWind/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
