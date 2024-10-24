import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ItemList from './pages/ItemList';
import NotFound from './pages/NotFound';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <main>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/itemList' element={<ItemList/>}/>
            <Route path='/items/:id' element={<ItemDetail/>}/>

            {/*
            path에 :이 붙는 경우, 매개변수를 참조한다.
            현재 코드에서는 :id는 id를 지정된 주소로 참조하는 것이 아닌 매개변수로 참조해서
            ItemDetail페이지에서 받아오는 useParams를 이용한 매개변수를 객체 형태로 반환
            */}

            <Route path='*' element={<NotFound/>}/>
            {/*
            path에 *을 넣게 되면 route로 연결된 path를 제외한 모든 페이지를 선택한다.
            path에 지정된 경로 외에 다른 페이지로 들어가게 되면 오류를 출력해야 하므로
            notfound컴포넌트를 작성해서 불러온다.

            오류 페이지는 필수는 아니지만, 사용자가 혹은 페이지에 정상적으로 접근하지 못한 경우,
            아무런 내용을 출력하지 않기 때문에 오류인지 사용자가 인식하기 어렵다.
            오류 출력 메시지를 담고 있는 컴포넌트를 출력해주는 것이 좋다.
            */}
          </Routes>
        </main>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
