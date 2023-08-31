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
import Search from './components/Search';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MyList from './components/MyList';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className='app'>
      <UserAuthContextProvider>
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

          <Route exact path='/movies' element={<ProtectedRoute><Movies /></ProtectedRoute>}></Route>
          <Route exact path='/movie/:id' element={<ProtectedRoute><Movie /></ProtectedRoute>}></Route>
          <Route exact path='/tvshows' element={<ProtectedRoute><Tvshows /></ProtectedRoute>}></Route>
          <Route exact path='/tvshow/:id' element={<ProtectedRoute><Tvshow /></ProtectedRoute>}></Route>
          <Route exact path='/search' element={<ProtectedRoute><Search /></ProtectedRoute>}></Route>
          <Route exact path='/search/movie/:id' element={<ProtectedRoute><Movie /></ProtectedRoute>}></Route>
          <Route exact path='/search/tv/:id' element={<ProtectedRoute><Tvshow /></ProtectedRoute>}></Route>
          <Route exact path='/mylist' element={<MyList />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
export default App;