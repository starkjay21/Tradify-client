import {useEffect, useState} from "react";
import axios from 'axios'
import {ItemCard} from "../components/ItemCard";
import {useGetUserID} from "../hooks/useGetUserID";
import {useCookies} from "react-cookie";
import {NavBar} from "../components/NavBar";

export const Home = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("https://tradify-server.onrender.com/items/").then((response) => {
            setItems(response.data)
        }).catch((error) => {
            console.log(error)
        })

        return () => {
        }
    }, [items])

    const [cookies, _] = useCookies(["access_token"])
    const [savedItems, setSavedItems] = useState([])
    const userID = useGetUserID()
    useEffect(() => {
        axios.get(`https://tradify-server.onrender.com/items/savedItems/ids/${userID}`,
            {headers: {authorization: cookies.access_token}}).then((response) => {
            setSavedItems(response.data.savedItemIDs)
        })

        return () => {
        }
    }, [savedItems])

    return (
        <>
            <NavBar/>
            <div className="home">
                {items.map((item) => {
                    return <ItemCard key={item._id} itemID={item._id} name={item.name} description={item.description}
                                     price={item.price}
                                     image={item.image} contactName={item.contactName}
                                     contactNumber={item.contactNumber}
                                     isSaved={savedItems.includes(item._id)}/>
                })
                }
            </div>
        </>
    )
}