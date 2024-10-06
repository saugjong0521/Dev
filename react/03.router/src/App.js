import logo from './logo.svg';
import './App.css';
import {Router} from 'react-router-dom'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Home/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
