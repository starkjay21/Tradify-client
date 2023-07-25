import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const NavBar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()
    let f = 0;
    const handleNavToggle = (e) => {
        const dropdownMenu = document.querySelector(".dropdown-menu")
        if(f === 0){
            dropdownMenu.style.display = "flex"
            e.target.src = "https://res.cloudinary.com/dme9vltjf/image/upload/v1690039273/plus_y6dxgr.png"
            e.target.style.transform = "rotate(45deg)"
            f = 1
        } else {
            dropdownMenu.style.display = "none"
            e.target.src = "https://res.cloudinary.com/dme9vltjf/image/upload/v1677912358/NITRUtsav/Frame_642_fmirqj.png"
            e.target.style.transform = "rotate(0deg)"
            f = 0
        }
    }
    const handleLogout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID")
        navigate("/")
    }
    return (
        <div className='navbar'>
            <div onClick={()=>{navigate('/')}} className="navbar-title">
                <h2>Tradify</h2>
            </div>
            {!cookies.access_token ?
                (<Link to="/register">
                    <button className='login-button'>Get Started</button>
                </Link>) :
                (<>
                    <div className="navbar-items">
                        <Link to="/home">View Listings</Link>
                        <Link to="/add-item">List</Link>
                        <Link to="/saved-items">Saved</Link>
                        <Link to="/user-items">Your Items</Link>
                        <button onClick={handleLogout} className="logout-button">Log Out</button>
                    </div>
                    <img className="toggle-button"
                         onClick={handleNavToggle}
                         src="https://res.cloudinary.com/dme9vltjf/image/upload/v1677912358/NITRUtsav/Frame_642_fmirqj.png"></img>
                    <div className="dropdown-menu">
                        <Link to="/home">Home</Link>
                        <Link to="/add-item">List</Link>
                        <Link to="/saved-items">Saved</Link>
                        <Link to="/user-items">Your Items</Link>
                        <button onClick={handleLogout} className="logout-button">Log Out</button>
                    </div>
                </>)}
        </div>
    )
}