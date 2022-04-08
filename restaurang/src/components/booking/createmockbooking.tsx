import axios from "axios"
import { useEffect } from "react"

interface ICustomer {
    name: string,
    lastname: string,
    email: string,
    phone: string
}
interface IBooking {
    restaurantId: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customer: ICustomer
}

export function CreateMockBooking(){

    let customer1:ICustomer = {
        name: "Rebecka",
        lastname: "Larsson",
        email: "rebecka.larsson@medieinstitutet.se",
        phone: "0707693442"
    }

    let booking1:IBooking = {
        restaurantId: "624ff35c138a40561e115f1e",
        date: "2022-05-06",
        time: "18.00",
        numberOfGuests: 3,
        customer: customer1
    }

    let customer2:ICustomer = {
        name: "Heniretta",
        lastname: "Lybeck",
        email: "henrietta.lybeck@medieinstitutet.se",
        phone: "0707121212"
    }

    let booking2:IBooking = {
        restaurantId: "624ff35c138a40561e115f1e",
        date: "2022-05-07",
        time: "21.00",
        numberOfGuests: 5,
        customer: customer2
    }

    let customer3:ICustomer = {
        name: "David",
        lastname: "Funck",
        email: "david.funck@medieinstitutet.se",
        phone: "0707131312"
    }
    let booking3:IBooking = {
        restaurantId: "624ff35c138a40561e115f1e",
        date: "2022-05-06",
        time: "21.00",
        numberOfGuests: 2,
        customer: customer3
    }

    useEffect(() => {
        axios.post<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/create", booking3)
        .then(function(response){
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          })}, []);

    return (
    <>
    
        </>
        )
}