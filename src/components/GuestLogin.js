import { Link, useLocation } from "react-router-dom";

const GuestLogin = ({ color, guestLoginHandler, guestLogin }) => {
    const location = useLocation().pathname

    return (
        <>
            {location === '/' ? <div className="select-lang" style={{ color: color }}>
                <div className="guest-login" onClick={guestLoginHandler}><h3>&nbsp;Hi, Guest</h3></div>
            </div> : <div className="select-lang" style={{ color: color }}>
                <div className="guest-login" onClick={guestLoginHandler}><h3>&nbsp;By, Guest</h3></div>
            </div>}
        </>
    )
}
export default GuestLogin;