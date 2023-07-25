import {useNavigate} from "react-router-dom";
import Axios from "axios";

export const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value
        const password = e.target[1].value
        Axios.post("https://tradify-server.onrender.com/auth/register", {
            username,
            password
        }).then((response) => {
            alert('User registered!')
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="background">
            <div className="register-container">
                <h1>Tradify</h1>
                <h2>Register here</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <span onClick={handleLogin}>Login</span></p>
            </div>
        </div>
    )
}