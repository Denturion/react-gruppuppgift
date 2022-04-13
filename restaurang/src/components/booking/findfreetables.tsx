import axios from "axios";
import { useState } from "react";
import { IBooking } from "../interfaces/IBooking";

export function FindFreeTables(date:string, numberOfGuests:number){

    let numberOfTables = numberOfGuests/6;

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then((response) => {

                console.log(date);
                let test= response.data.filter((filterByDate)=> filterByDate.date.includes(date));

                console.log(test);

                //response.data.filter((data: IBooking) => data.date.includes(date.toLocaleDateString()));
                //setBookingList(apiBookings);
            });

            return(<></>);


    //Fetcha alla bokningar
//SVAR response

//Filtrera response efter datum "Datumresponse" [] [objekt1, objekt2]

//IF datumresponse > 0 (Kanske inte behövs)

//Variablel18 = 15
//Variabel21 = 15

//Filtera "datumresponse" efter tid
//Tid18 []
//Tid21 []

//Variabel18 - tid18.legnth
//Variabel21 - tid21.legnth

//if Varabel21 > 0 Visa 21 (show9=true)
//if Varavel18 > 0 visa 18 (show6=true)
//if varaibel18===0 && varaiabel21===0 allt är bokat (show9 och show6 = false)

//else visa allt (Kanske inte behövs)
    //Fetcha alla bokningar

    //Gå igenom mockfetch för att lösa logiken

}