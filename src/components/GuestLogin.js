import { Link, useLocation } from "react-router-dom";

const GuestLogin = ({ color }) => {
    const location = useLocation().pathname

    return (
        <>
            {location==='/' ? <div className="select-lang" style={{ color: color }}>
                <Link to='/tvshows'><h3>&nbsp;Hi, Guest</h3></Link>
            </div> : <div></div>}
        </>
    )
}
export default GuestLogin;