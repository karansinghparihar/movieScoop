import GuestLogin from "./GuestLogin";
import netflixLogo from '../images/netflixLogo.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Header = ({ guestLoginHandler, guestLogin }) => {
    
    const location = useLocation().pathname
    const { logOut } = useUserAuth()
    const signOutHandler = async() => {
        try {
            await logOut()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <header>
            <div className="nav-links">
            <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>     
                <Link to='/movies'>Movies</Link>
                <Link to='/tvshows'>TV Shows</Link>
                <Link to='/mylist'>My List</Link>
            </div>
            <div>
                <GuestLogin color='#fff' guestLoginHandler={guestLoginHandler} guestLogin={guestLogin} />
                {location==='/' ? <Link to='/signin'><button>Sign In</button></Link> : <Link to='/signin'><button onClick={signOutHandler}>Sign Out</button></Link>}
            </div>
        </header>
    )
}
export default Header;