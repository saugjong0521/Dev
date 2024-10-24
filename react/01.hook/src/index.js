import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './01state/State';
import State02 from './01state/State02';
import Effect from './02effect/Effect';
import EffectEx from './02effect/EffectEx';
import Member from './02effect/Member';
import Event from './03event/Event';
import Reducer from './04reducer/Reducer';
import ShoppingCart from './04reducer/ShoppingCart';
import Ref from './05useRef/Ref';
import Game from './05useRef/Game';
import Darkmode from './06context/Darkmode';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State/> */}
    {/* <State02/> */}
    {/* <Effect/> */}
    {/* <EffectEx/> */}
    {/* <Member/> */}
    {/* <Event/> */}
    {/* <Reducer/> */}
    {/* <ShoppingCart/> */}
    {/* <Ref/> */}
    {/* <Game/> */}
    <Darkmode/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
