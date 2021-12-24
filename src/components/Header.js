import GuestLogin from "./GuestLogin";
import netflixLogo from '../images/netflixLogo.png'
import { Link } from "react-router-dom";

const Header = () => {
    

    return (
        <header>
            <div className="nav-links">
            <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>     
                <Link to='/movies'>Movies</Link>
                <Link to='/tvshows'>TV Shows</Link>
                <Link to='/mylist'>My List</Link>
            </div>
            <div>
                <GuestLogin color='#fff'/>
                <Link to='/signin'><button>Sign In</button></Link>
            </div>
        </header>
    )
}
export default Header;