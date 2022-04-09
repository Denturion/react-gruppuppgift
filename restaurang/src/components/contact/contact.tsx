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

const [restaurantInfo, setRestaurantinfo] = useState<IRestaurant[]>([{_id: "", name: "", address: "", zip: "", city: ""}]);

const getRestaurant = () => {
    axios.get<IRestaurant[]>("https://school-restaurant-api.azurewebsites.net/restaurant/624ff35c138a40561e115f1e")
    .then((response) => {
        const apiRestaurant = response.data;
        setRestaurantinfo(apiRestaurant);
    });
};

    useEffect(() => getRestaurant(), []);

    return (
        <div>
            <p>+4611-496 11 87</p>
            <p>{ restaurantInfo[0].name }</p>
            <p>{ restaurantInfo[0].address }</p>
            <p>{ restaurantInfo[0].zip } { restaurantInfo[0].city }</p>
            
            <p>ÖPPETTIDER</p>
            <p>Sön-Tors 11-21</p>
            <p>Fre-lörd 11-22</p>
            <p>britney@burgers.se</p>
        </div>
   )
}