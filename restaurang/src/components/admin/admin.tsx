import { useState } from "react";
import { IBooking } from "../interfaces/IBooking";

export function Admin () {
    const [bookingList, setBookingList] = useState<IBooking[]>([{id: "", restaurantId: "", date: "", time: "", numberOfGuests: 0, customerId: ""}]);


    //Länk till restaurangens bokningar
    //https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e
    return 
        (<>
        </>)
        

}