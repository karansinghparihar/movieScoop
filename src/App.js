import './App.css';
import NetflixBg from './images/netflixBg.png'
import Header from './components/Header';
import Home from './components/Home'
import Features from './components/Features';
import HorizontalSection from "./components/HorizontalSection";
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={
          <>
            <div className='app-front'>
              <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
              <div className='container'>
                <Header />
                <Home />
              </div>
              <HorizontalSection />
            </div>
            <Features />
            <Faqs />
            <HorizontalSection />
            <Footer />
          </>
        } />
        <Route exact path='/movies' element={<Movies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
