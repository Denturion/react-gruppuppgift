import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";

export interface ICustomerInfo {
    id: string,
    name: string,
    lastname: string,
    email: string,
    phone: string,
}

export function Admin() {
    const [bookingList, setBookingList] = useState<IBooking[]>([{ id: "", restaurantId: "", date: "", time: "", numberOfGuests: 0, customerId: "" }]);

    const getBookings = () => {
        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then((response) => {
                const apiBookings = response.data;
                setBookingList(apiBookings);
            });
    };

    useEffect(() => {
        getBookings()
    }, []);

    // Går igenom varje bokning i listan och gör en axios get. Just nu en oändlig loop
    // bookingList.forEach(function(item, index, array) {
    //axios.get(`https://school-restaurant-api.azurewebsites.net/customer/625044c93d77c8d9b3e011a4`)
    //.then((response) => {
    //console.log(response.data);

    // })
    // });

    //    bookingList.map(item =>{
    //     axios.get(`https://school-restaurant-api.azurewebsites.net/customer/`+item.customerId)
    //     .then((item) => {
    //         console.log(item.data);

    //     })

    //    });

    return (
        <div>
            <p>Admin works!</p>
            {/* {bookingList.map(booking => {
                <p>{booking.date}</p>
                const customerid = booking.customerId;
                const url:string = `https://school-restaurant-api.azurewebsites.net/customer/`+customerid;
                 axios.get<ICustomerInfo>(url)
                     .then((customer) => {
                        <p>{customer.data.name}</p>
                     })
            })
            } */}
        </div>
    )


}