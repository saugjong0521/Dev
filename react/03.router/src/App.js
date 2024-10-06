import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header/>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
