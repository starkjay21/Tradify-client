import {ItemCard} from "../components/ItemCard";
import React from "react";
import {Testimonials} from "../components/Testimonials";
export const Playground = () => {
    const item = {
        _id: "123",
        name: "Test Item",
        description: "lorem ipsum dolor amet, sit dolor ipsum dolor amet, sit dolor ipsum dolor amet, sit dolor ipsum dolor amet, sit dolor ipsum amet lorem ipsum lorem ipsum lorem ipsum",
        price: 123,
        image: "https://img.freepik.com/free-photo/white-bicycle-standing-park-morning-fitness-loneliness_1153-6768.jpg?w=900&t=st=1689681928~exp=1689682528~hmac=c940b41f9b27161dcb4d27657c2edbd5de4f33d08fb0771c484cdb48bd724252",
        contactName: "Test Contact Name",
        contactNumber: "+91 8144325780"
    }
    return (
        <Testimonials/>
    )
}