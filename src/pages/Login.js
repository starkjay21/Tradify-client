import {useNavigate} from "react-router-dom";
import Axios from "axios";
import {useCookies} from "react-cookie";
export const Login = () => {
    const navigate = useNavigate()
    const [_, setCookie] = useCookies(["access_token"])
    const handleRegister = () => {
        navigate("/register");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value
        const password = e.target[1].value
        Axios.post("https://tradify-server.onrender.com/auth/login", {
            username,
            password
        }).then((response) => {
            setCookie("access_token", response.data.token)
            window.localStorage.setItem("userID", response.data.userID)
            navigate("/home");
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="background">
            <div className="register-container">
                <h1>Tradify</h1>
                <h2>Log into your account</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Log in</button>
                </form>
                <p>Don't have an account? <span onClick={handleRegister}>Sign Up</span></p>
            </div>
        </div>
    )
}