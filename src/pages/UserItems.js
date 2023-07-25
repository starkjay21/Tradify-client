import {ItemCard} from "../components/ItemCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";
import {NavBar} from "../components/NavBar";
import {useCookies} from "react-cookie";

export const UserItems = () => {
    const [userItems, setUserItems] = useState([])

    const [cookies, _] = useCookies(["access_token"])
    const userID = useGetUserID()
    useEffect(() => {
        axios.get(`https://tradify-server.onrender.com/items/${userID}`,
            {headers: {authorization: cookies.access_token}}).then((response) => {
            setUserItems(response.data.userListings)
        })
        return () => {
        }
    }, [userItems])

    return (
        <>
            <NavBar/>
            <div className="home">
                {userItems.map((item) => {
                    return <ItemCard key={item._id} name={item.name} description={item.description}
                                          price={item.price}
                                          image={item.image} contactName={item.contactName}
                                          contactNumber={item.contactNumber} noButton={true}/>
                })
                }
            </div>
        </>

    )
}