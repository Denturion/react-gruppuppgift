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

    //console.log(restaurantInfo);

    let restaurantName : string = "";
    let restaurantAdress : string = "";
    let restaurantZip : string = "";
    let restaurantCity : string = "";

    if (restaurantInfo[0].name !== undefined) {

    restaurantName = restaurantInfo[0].name;
    restaurantAdress = restaurantInfo[0].address;
    restaurantZip = restaurantInfo[0].zip;
    restaurantCity = restaurantInfo[0].city;

    }

    return (
        <div>
            <p>+4611-496 11 87</p>
            <p>{ restaurantName }</p>
            <p>{ restaurantAdress }</p>
            <p>{ restaurantZip } { restaurantCity }</p>
            
            <p>ÖPPETTIDER</p>
            <p>Sön-Tors 11-21</p>
            <p>Fre-lörd 11-22</p>
            <p>britney@burgers.se</p>
        </div>
   )
}