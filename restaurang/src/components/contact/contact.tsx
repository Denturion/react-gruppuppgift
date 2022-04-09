import axios from "axios"
import { useEffect, useState } from "react";

export interface IRestaurant {
    _id: string,
    name: string,
    address: string,
    zip: string,
    city: string,
}

export function Contact () {

const [restaurantInfo, setRestaurantinfo] = useState<IRestaurant[]>([]);

const getRestaurant = () => {
    axios.get<IRestaurant[]>("https://school-restaurant-api.azurewebsites.net/restaurant/624ff35c138a40561e115f1e")
    .then((response) => {
        const apiRestaurant = response.data;
        setRestaurantinfo(apiRestaurant);
    });
};

    useEffect(() => getRestaurant(), []);

    console.log(restaurantInfo);

    let restaurantName : string = restaurantInfo[0].name;
    let restaurantAdress : string = restaurantInfo[0].address;
    let restaurantZip : string = restaurantInfo[0].zip;
    let restaurantCity : string = restaurantInfo[0].city;

    return (
        <div>
            <p>Contacts works</p>
            { restaurantName }
            { restaurantAdress }
            { restaurantZip }
            { restaurantCity }
            </div>
   )
}