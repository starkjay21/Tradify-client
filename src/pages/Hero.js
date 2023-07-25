import {useGetUserID} from "../hooks/useGetUserID";
import {useNavigate} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {Testimonials} from "../components/Testimonials";
import {About} from "../components/About";
import {Footer} from "../components/Footer";


export const Hero = () => {
    const user = useGetUserID()
    const navigate = useNavigate()
    const handleStart = () => {window.scrollTo({top: 650, behavior: 'smooth'})}
    return (
        <>
            <NavBar/>
            <div className="hero">
                <div className="hero-text">
                    <h1>Trade,</h1>
                    <h1>Transform,</h1>
                    <h1>Thrive.</h1>
                    <p>Your ultimate online marketplace for seamless buying and selling experiences, where you can
                        effortlessly connect with others to trade your treasures and discover new possibilities.</p>
                    <button onClick={handleStart} className='hero-button'>Get Started!</button>
                </div>
                <div className="hero-img">
                    <img src="https://res.cloudinary.com/dme9vltjf/image/upload/v1689954219/4896231_jkrwyz.jpg"
                         alt='image-not-found'/>
                </div>
            </div>
            <About/>
            <Testimonials/>
            <Footer/>
        </>
    )
}