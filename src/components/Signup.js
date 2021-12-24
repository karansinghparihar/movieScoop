import { Link } from "react-router-dom";
import NetflixBg from '../images/netflixBg.png'
import netflixLogo from '../images/netflixLogo.png'

const Signup = () => {
    return (
        <div className="bg-signin">
            <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
            <div className="logo-signin">
                <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>
                <form className="signin">
                    <h1>Sign Up</h1>
                    <input type='text' placeholder="Name" />
                    <input type='email' placeholder="Email" />
                    <input type='password' placeholder="Password" />
                    <input type='password' placeholder="Confirm Password" />
                    <button type='submit'>Sign Up</button>
                    <div className="signin-footer">
                        Already signed up?<Link to='/signin'>Sign in now.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;