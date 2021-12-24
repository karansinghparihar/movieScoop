import { Link } from "react-router-dom";
import NetflixBg from '../images/netflixBg.png'
import netflixLogo from '../images/netflixLogo.png'

const SignIn = () => {
    return (
        <div className="bg-signin">
            <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
            <div className="logo-signin">
                <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>
                <form className="signin">
                    <h1>Sign In</h1>
                    <input type='email' placeholder="Email" />
                    <input type='password' placeholder="Password" />
                    <button type='submit'>Sign In</button>
                    <div className="signin-footer">
                        New to Netflix?<Link to='/signup'>Sign up now.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn;