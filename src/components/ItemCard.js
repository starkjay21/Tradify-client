import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";
import {useCookies} from "react-cookie";

export const ItemCard = ({itemID, name, description, price, image, contactName, contactNumber, isSaved, noButton }) => {
    const userID = useGetUserID()
    const [cookies, _] = useCookies(["access_token"])

    const handleSave = () => {
        axios.put(`https://tradify-server.onrender.com/items/`, {
            itemID,
            userID
        }, {headers: { authorization: cookies.access_token} })
    }

    const handleUnsave = () => {
        axios.put(`https://tradify-server.onrender.com/items/remove`, {
            itemID,
            userID
        }, {headers: { authorization: cookies.access_token} })
    }
    return (
        <>
            <div className="item-card">
                <h2>{name}</h2>
                <img src={image} alt="NO IMAGE FOUND"/>
                <p className="desc">{description}</p>
                <p>Price: Rs.<span id="item-price">{price}</span></p>
                <p>Contact Name: <span>{contactName}</span></p>
                <p>Contact Number: <span>{contactNumber}</span></p>
                {!noButton && (!isSaved ?
                    (<button className='save' onClick={handleSave}>SAVE</button>) :
                    (<button className='unsave' onClick={handleUnsave}>UNSAVE</button>))}
            </div>
        </>
    )
 }