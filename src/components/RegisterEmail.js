import { Link } from "react-router-dom";

export const RegisterEmail = ({ content }) => {
    return (
        <div className="register-email">
            <h3 style={{ fontSize: '1.6rem' }}>{content}</h3><br />
            <form>
                <input type='email' required placeholder="Email address"></input>
                <Link to='/movies'>
                    <button style={{ cursor: 'pointer', width: '13rem', padding: '0', background: 'red', color: 'white' }}>Get Started &nbsp;<i className="fa fa-chevron-right"></i></button>
                </Link>
            </form>
        </div>
    )
}
export default RegisterEmail;
