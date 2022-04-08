import axios from "axios"
import { useEffect, useState } from "react";

interface IRestaurant {
    _id: string,
    name: string,
    address: string,
    zip: string,
    city: string,
}

export function Contact () {

const [restaurantInfo, setRestaurantinfo] = useState();

const getRestaurant = () => {
    axios.get("https://school-restaurant-api.azurewebsites.net/restaurant/624ff35c138a40561e115f1e")
    .then((response) => {
        const apiRestaurant = response.data;
        setRestaurantinfo(apiRestaurant[0]);
    });
};

    useEffect(() => getRestaurant(), []);

    console.log(restaurantInfo);

    return (
        <div>
            <p>Contacts works</p>
            </div>
   )
}