import axios from "axios";
import { useState } from "react";
import { IBooking } from "../interfaces/IBooking";

interface IFindFreeTables{
    date:string,
    numberOfGuests:number,
}

export function FindFreeTables(props: IFindFreeTables){

    let numberOfTables:number = props.numberOfGuests/6; //=2
    let freeTables18:number = 15;
    let freeTables21:number = 15;

    let show18: boolean = false;
    let show21: boolean = false;

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then((response) => {

                let bookingsOfTheDay= response.data.filter((filterByDate)=> filterByDate.date.includes(props.date));

                let bookingTime18 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("18.00"));
                freeTables18 = freeTables18-bookingTime18.length;
                let bookingTime21 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("21.00"));
                freeTables21 = freeTables21-bookingTime21.length;


                if (freeTables21 >= numberOfTables){
                    show21=true;
                }
                if (freeTables18 >= numberOfTables){
                    show18=true;
                }

                console.log(show18)
                console.log(show21)



            });

            return(<></>);


    //Fetcha alla bokningar
//SVAR response

//IF datumresponse > 0 (Kanske inte behövs)

//if varaibel18===0 && varaiabel21===0 allt är bokat (show9 och show6 = false)

//else visa allt (Kanske inte behövs)
    //Fetcha alla bokningar

    //Gå igenom mockfetch för att lösa logiken

}