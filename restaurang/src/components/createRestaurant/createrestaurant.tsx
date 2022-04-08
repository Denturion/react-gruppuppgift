import axios, { Axios } from "axios"
import { useEffect } from "react"

interface ICreateRestaurant {
    name: string,
    address: {
        street: string,
        zip: string,
        city: string,
    }
}

function CreateRestaurant() {

    let ThisRestaurant : ICreateRestaurant = 
    {
        name: "Britney Burgers",
        address: {
            street: "Kungsgatan 35",
            zip: "602 20",
            city: "Norrköping"
        }
    }

    useEffect(() => {
        axios.post<ICreateRestaurant>("https://school-restaurant-api.azurewebsites.net/restaurant/create", ThisRestaurant)
        .then(function(response){
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          })}, []);



    return (<>Create Restaurant Works!</>)
}