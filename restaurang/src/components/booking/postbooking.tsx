import axios from "axios";
import { useEffect } from "react";
import { IBooking } from "../interfaces/IBooking";
import { IBookingCustomer } from "../interfaces/IBookingCustomer";
import { ICustomer } from "../interfaces/ICustomer";


export function postBooking(time: string, mydate: string, guests: number, customer: ICustomer) {

    let restaurantID = "624ff35c138a40561e115f1e";

    let bookingToPost: IBookingCustomer = {
        restaurantId: restaurantID,
        date: mydate,
        time: time,
        numberOfGuests: guests,
        customer: customer
    }

    let numberOfTables = guests/6;

    //Just nu pushar vi två bokningar med antal personer samma två gånger om vi valt mer än 6 gånger.
    for (var i=numberOfTables; i > 0 ; i--){
        axios.post<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/create", bookingToPost)
        .then(function(response){
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          });
          console.log(i);
    }

    return {};
}