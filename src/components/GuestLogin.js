import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const GuestLogin = ({ color }) => {
    const navigate = useNavigate()
    const { guestLogin, guest } = useUserAuth()

    const guestLoginHandler = async() => {
        try {
            await guestLogin()
            navigate('/tvshows')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="guest-user" style={{ color: color, border: '1px solid '+color }}>
                <div className={`${guest ? 'guest-login-disabled' : 'guest-login'}`} onClick={guestLoginHandler}><h3>&nbsp;{guest ? 'Guest User' : 'Guest Login'}</h3></div>
            </div> 
        </>
    )
}
export default GuestLogin;