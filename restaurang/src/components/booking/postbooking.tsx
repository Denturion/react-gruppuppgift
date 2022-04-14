import axios from "axios";
import { useEffect } from "react";
import { IBooking } from "../interfaces/IBooking";
import { IBookingCustomer } from "../interfaces/IBookingCustomer";
import { ICustomer } from "../interfaces/ICustomer";


export function postBooking(time: string, mydate: string, guests: number, customer: ICustomer) {

    let restaurantID = "624ff35c138a40561e115f1e";

    let bookingToPost: IBookingCustomer = {
        restautantID: restaurantID,
        date: mydate,
        time: time,
        numberOfGuests: guests,
        customer: customer
    }


        axios.post<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/create", bookingToPost)
        .then(function(response){
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          });

    //När vi pushar, on number of Guest > 6 så måste vi pusha samma bokning två gånger

    return {};
}