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

export function Admin () {
    const [bookingList, setBookingList] = useState<IBooking[]>([{id: "", restaurantId: "", date: "", time: "", numberOfGuests: 0, customerId: ""}]);

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



        const [customerInfo, setCustomerInfo] = useState<ICustomerInfo>({id: "", name: "", lastname: "", email: "", phone: ""});

    // Går igenom varje bokning i listan och gör en axios get. Just nu en oändlig loop
    // Skapa en ny array med customer info inuti objekten i bookingList??

   // bookingList.forEach(function(item, index, array) {
        //axios.get(`https://school-restaurant-api.azurewebsites.net/customer/625044c93d77c8d9b3e011a4`)
        //.then((response) => {
            //console.log(response.data);
            
       // })
   // });


   //SKAPA USEEFFECT 
   //Skapa lista för alla kunder 
   //Mappa bookinglist 
   //Gå igenom varje item i bookinglist och fetcha customerID info, 
   //Pusha customer ID info till kundlistan 

   //Skriv ut både bookinglist och kundlistan :)

    return(
        <div>
        <p>Admin works!</p>
        <p> { bookingList[0].date } </p>
        </div>
    )
        

}