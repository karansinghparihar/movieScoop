import GuestLogin from "./GuestLogin";
import AppLogo from '../images/AppLogo.png'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Header = () => {

    const navigate = useNavigate()
    const { logOut, user } = useUserAuth()
    let loggedInUser = ''
    if (user) {
       let loggedInUserArray = user.email.split('@')
       loggedInUser = loggedInUserArray[0]
    }

    const signOutHandler = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <header>
            <div className="nav-links">
                <Link to='/'><img src={AppLogo} alt={AppLogo} /></Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/tvshows'>TV Shows</Link>
                <Link to='/mylist'>My List</Link>
                <Link to='/search'><div className="logged-in-user" style={{ width: '11.5rem' }}>&#xf002; Search Content</div></Link>
            </div>
            <div style={{ width: '21%' }}>
                {user ? <div className="logged-in-user" style={{ color: '#fff' }}>
                    <div className=''><h3>&nbsp;{loggedInUser}</h3></div>
                </div>
                    : <GuestLogin color='#fff' />}
                {user ? <Link to='/signin'><button onClick={signOutHandler}>Sign Out</button></Link> : <Link to='/signin'><button>Sign In</button></Link>}
            </div>
        </header>
    )
}
export default Header;