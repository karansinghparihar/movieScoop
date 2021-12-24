import { useState, useEffect } from 'react';
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
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import Tvshow from './components/Tvshow';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import MyList from './components/MyList';

function App() {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ myList, setMyList ] = useState({})

  useEffect(() => {
     setIsLoading(false)
  })

  const addToList = (list) => {
    console.log(list)
    setMyList(list)
  }

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={isLoading ? <h2>Loading...</h2> : 
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
        <Route exact path='/movie/:id' element={<Movie addToList={addToList} />}></Route>
        <Route exact path='/tvshows' element={<Tvshows />}></Route>
        <Route exact path='/tvshow/:id' element={<Tvshow addToList={addToList} />}></Route>
        <Route exact path='/mylist' element={<MyList myList={myList}/>}></Route>
        <Route exact path='/signin' element={<SignIn />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
export default App;
