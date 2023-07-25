import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {NavBar} from "../components/NavBar";
export const AddItems = () => {
    const userID = useGetUserID()
    const navigate = useNavigate()
    const [cookies, _] = useCookies(["access_token"])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const description = e.target[1].value
        const price = e.target[2].value
        const image = e.target[3].value
        const contactName = e.target[4].value
        const contactNumber = e.target[5].value
        const itemOwner = userID

        await axios.post("https://tradify-server.onrender.com/items/", {
            name, description, price, image, contactName, contactNumber, itemOwner
        },{headers: { authorization: cookies.access_token} }).then((response) => {
            alert("Item listed successfully")
            navigate('/home')
        }).catch((error) => {
            console.log(error);
        })

    }
    return (
        <>
            <NavBar />
            <div className="background">
                <div className="add-item-container">
                    <h2>List an Item</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title"/>
                        <input type="text" placeholder="Description"/>
                        <input type="number" placeholder="Price(in INR)"/>
                        <input type="text" placeholder="Image URL"/>
                        <input type="text" placeholder="Contact Name"/>
                        <input type="text" placeholder="Contact Number"/>
                        <button type="submit">List Item</button>
                    </form>
                </div>
            </div>
        </>

    )
}