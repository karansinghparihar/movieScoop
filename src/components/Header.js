import SelectLang from "./SelectLang";
import netflixLogo from '../images/netflixLogo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="nav-links">
            <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>     
                <Link to='/movies'>Movies</Link>
                <Link to='/tvshows'>TV Shows</Link>
            </div>
            <div>
                <SelectLang color='#fff'/>
                <button style={{ background:'red', border: 'none' }}>Sign In</button>
            </div>
        </header>
    )
}
export default Header;