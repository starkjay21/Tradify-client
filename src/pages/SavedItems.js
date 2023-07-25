import {useEffect, useState} from "react";
import axios from "axios";
import {useGetUserID} from "../hooks/useGetUserID";
import {ItemCard} from "../components/ItemCard";
import {useCookies} from "react-cookie"
import {NavBar} from "../components/NavBar";

export const SavedItems = () => {
    const [savedItems, setSavedItems] = useState([])
    const userID = useGetUserID()
    const [cookies, _] = useCookies(["access_token"])
    const [isSaved, setIsSaved] = useState(true)

    useEffect(() => {
        axios.get(`https://tradify-server.onrender.com/items/savedItems/${userID}`,
            {headers: {authorization: cookies.access_token}}).then((response) => {
            setSavedItems(response.data.savedItems)
            // setIsSaved(savedItems.includes(item._id))
        }).catch((error) => {
            console.log(error)
        })

        return () => {
        }
    }, [savedItems])
    return (
        <>
            <NavBar/>
            <div className="home">
                {savedItems.map((item) => {
                    return <ItemCard key={item._id} name={item.name} description={item.description} price={item.price}
                                     image={item.image} contactName={item.contactName}
                                     contactNumber={item.contactNumber}
                                     isSaved={isSaved} noButton={true}/>
                })
                }
            </div>
        </>

    )
}
