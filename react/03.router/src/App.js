import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ItemList from './pages/ItemList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/itemList' elememt={<ItemList/>}/>
          </Routes>
        </main>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
