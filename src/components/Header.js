import GuestLogin from "./GuestLogin";
import netflixLogo from '../images/netflixLogo.png'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Header = () => {
    
    const navigate = useNavigate()
    const { logOut, user } = useUserAuth()
    
    const signOutHandler = async() => {
        try {
            await logOut()
            navigate('/')
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
                { user ? null : <GuestLogin color='#fff' /> }
                { user ? <Link to='/signin'><button style={{ marginLeft: '11rem' }} onClick={signOutHandler}>Sign Out</button></Link> : <Link to='/signin'><button>Sign In</button></Link> }
            </div>
        </header>
    )
}
export default Header;