import axios from "axios"

interface IRestaurant {
    _id: string,
    name: string,
    address: string,
    zip: string,
    city: string,
}

export function Contact () {

    axios
        .get<IRestaurant[]>(
            "https://school-restaurant-api.azurewebsites.net/restaurant/624ff35c138a40561e115f1e"
        )
        .then((response => {
            response.data.map((restaurant: IRestaurant) => {
                console.log(restaurant.name);
                
                
            })
        }));

        

    return (
    <div>
        <h1>contact works!</h1>
        <p>{ }</p>
        </div>)
}