import axios from "axios";
import { useState } from "react";
import { IBooking } from "../interfaces/IBooking";

interface IFindFreeTables{
    date:string,
    numberOfGuests:number
}

export function FindFreeTables(props: IFindFreeTables){

    console.log(props.date)
    let numberOfTables:number = props.numberOfGuests/6;
    let freeTables18:number = 15;
    let freeTables21:number = 15;
    //const [show18, setShow18] = useState(true);
    //const [show21, setShow21] = useState(true);

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then((response) => {

                let bookingsOfTheDay= response.data.filter((filterByDate)=> filterByDate.date.includes(props.date));

                let bookingTime18 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("18.00"));
                freeTables18 = freeTables18-bookingTime18.length;
                let bookingTime21 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("21.00"));
                freeTables21 = freeTables21-bookingTime21.length;


                console.log(bookingsOfTheDay);
                console.log(bookingTime21);
                console.log(freeTables21);


            });

            return(<></>);


    //Fetcha alla bokningar
//SVAR response

//IF datumresponse > 0 (Kanske inte behövs)

//if Varabel21 > 0 Visa 21 (show9=true)
//if Varavel18 > 0 visa 18 (show6=true)
//if varaibel18===0 && varaiabel21===0 allt är bokat (show9 och show6 = false)

//else visa allt (Kanske inte behövs)
    //Fetcha alla bokningar

    //Gå igenom mockfetch för att lösa logiken

}