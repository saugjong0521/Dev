import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ItemList from './pages/ItemList';

function App() {
  return (
    <>
      <Router>
        <Header/>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/itemList' element={<ItemList/>}/>
          </Routes>
        </main>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
