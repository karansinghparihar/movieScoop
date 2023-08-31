import { Link, useNavigate } from "react-router-dom";
import NetflixBg from '../images/netflixBg.png'
import AppLogo from '../images/AppLogo.png'
import { useState } from 'react'
import { useUserAuth } from "../context/UserAuthContext";

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)
    const {signIn, googleSignIn} = useUserAuth()
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setErr('')
            await signIn(email, password)
            navigate('/')
        } catch(err) {
            setErr(err.message)
        }
    }

    const googleSignInHandler = async(e) => {
        e.preventDefault()
        try {
            setErr('')
            await googleSignIn()
            navigate('/')
        } catch(err) {
            setErr(err.message)
        }
    }

    return (
        <div className="bg-signin">
            <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
            <div className="logo-signin">
                <Link to='/'><img src={AppLogo} alt={AppLogo} /></Link>
                <form className="signin" onSubmit={submitHandler}>
                    <h1>Sign In</h1>
                    {err ? <h2>{err}</h2> : null}
                    <input type='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Sign In</button><hr />
                    <button onClick={googleSignInHandler} style={{ background: '#4884f4', borderColor: '#4884f4' }}><link rel="shortcut icon" href="https://www.google.com/favicon.ico" />&#xf1a0;&nbsp;&nbsp;Sign in with Google</button><hr />
                    <div className="signin-footer">
                        New to MovieScoop?<Link to='/signup'>Sign up now.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn;