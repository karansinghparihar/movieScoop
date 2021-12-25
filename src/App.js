import { useState, useEffect } from 'react';
import './App.css';
import NetflixBg from './images/netflixBg.png'
import Header from './components/Header';
import Home from './components/Home'
import Features from './components/Features';
import HorizontalSection from "./components/HorizontalSection";
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Movies from './components/Movies';
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import Tvshow from './components/Tvshow';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import MyList from './components/MyList';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [myList, setMyList] = useState({})
  const [guestLogin, setGuestLogin] = useState(false)
  const guestNavigate = useNavigate()

  useEffect(() => {
    setIsLoading(false)
  })

  const guestLoginHandler = () => {
    setGuestLogin(!guestLogin)
    console.log('guestLoginHandler')
    if (guestLogin) {
      guestNavigate('/')
    }
    else {
      guestNavigate('/movies')
    }
  }

  console.log('guest login', guestLogin)

  const addToList = (list) => {
    console.log(list)
    setMyList(list)
  }

  return (
    <div className='app'>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path='/' element={isLoading ? <h2>Loading...</h2> :
            <>
              <div className='app-front'>
                <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
                <div className='container'>
                  <Header guestLoginHandler={guestLoginHandler} guestLogin={guestLogin} />
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
          <Route exact path='/movies' element={guestLogin ? <Movies guestLoginHandler={guestLoginHandler} /> : <ProtectedRoute><Movies guestLoginHandler={guestLoginHandler} /></ProtectedRoute>}></Route>
          <Route exact path='/movie/:id' element={guestLogin ? <Movie guestLoginHandler={guestLoginHandler} /> : <ProtectedRoute><Movie guestLoginHandler={guestLoginHandler} /></ProtectedRoute>}></Route>
          <Route exact path='/tvshows' element={guestLogin ? <Tvshows guestLoginHandler={guestLoginHandler} /> : <ProtectedRoute><Tvshows guestLoginHandler={guestLoginHandler} /></ProtectedRoute>}></Route>
          <Route exact path='/tvshow/:id' element={guestLogin ? <Tvshow guestLoginHandler={guestLoginHandler} addToList={addToList} /> : <ProtectedRoute><Tvshow guestLoginHandler={guestLoginHandler} addToList={addToList} /></ProtectedRoute>}></Route>
          <Route exact path='/mylist' element={guestLogin ? <MyList myList={myList} /> : <ProtectedRoute><MyList myList={myList} /></ProtectedRoute>}></Route>

          <Route exact path='/signin' element={<SignIn guestLoginHandler={guestLoginHandler} />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
export default App;
