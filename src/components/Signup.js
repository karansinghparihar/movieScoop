import { Link, useNavigate } from "react-router-dom";
import NetflixBg from '../images/netflixBg.png'
import netflixLogo from '../images/netflixLogo.png'
import { useState } from 'react'
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)
    const {signUp} = useUserAuth()
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            setErr('')
            await signUp(email, password)
            navigate('/signin')
        } catch(err) {
            setErr(err.message)
        }

    }

    return (
        <div className="bg-signin">
            <img src={NetflixBg} alt={NetflixBg} width={'100%'} />
            <div className="logo-signin">
                <Link to='/'><img src={netflixLogo} alt={netflixLogo} /></Link>
                <form className="signin" onSubmit={submitHandler}>
                    <h1>Sign Up</h1>
                    {err ? <h2>{err}</h2> : null}
                    <input type='text' value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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