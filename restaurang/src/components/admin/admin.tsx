import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";

export function Admin () {
    const [bookingList, setBookingList] = useState<IBooking[]>([{id: "", restaurantId: "", date: "", time: "", numberOfGuests: 0, customerId: ""}]);

    const getBookings = () => {
        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
    .then((response) => {
        const apiBookings = response.data;
        setBookingList(apiBookings);
    });
    };

    useEffect(() => getBookings(), []);
    console.log(bookingList);
        

    return(
        <p>Admin works!</p>
    )
        

}