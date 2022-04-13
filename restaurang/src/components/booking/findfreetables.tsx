import axios from "axios";
import { useState } from "react";
import { IBooking } from "../interfaces/IBooking";

interface IFindFreeTables{
    date:string,
    numberOfGuests:number,
    time(arg: string): void
}

export function FindFreeTables(props: IFindFreeTables){

    let numberOfTables:number = props.numberOfGuests/6; 
    let freeTables18:number = 2;
    let freeTables21:number = 2;

    const [show18, setShow18] = useState(false);
    const [show21, setShow21] = useState(false);



        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then((response) => {

                let bookingsOfTheDay= response.data.filter((filterByDate)=> filterByDate.date.includes(props.date));

                let bookingTime18 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("18.00"));
                freeTables18 = freeTables18-bookingTime18.length;
                let bookingTime21 = bookingsOfTheDay.filter((filterByTime) => filterByTime.time.includes("21.00"));
                freeTables21 = freeTables21-bookingTime21.length;

                if (freeTables18 >= numberOfTables){
                    setShow18(true);
                }
                if (freeTables21 >= numberOfTables){
                    setShow21(true);
                }



            });

            return(<>
            <div className='freeTime'>
              <p>Tryck på tiden för att komma vidare till bokning</p>
              <div className='times'>
                {show18 && 
                <>
                <button className='freeTables' onClick={() => { props.time("18.00") }}>18.00</button>
                </>
                }
                {show21 && <button className='freeTables' onClick={() => { props.time("21.00") }}>21.00</button>}
              </div>
            </div></>);


    //Fetcha alla bokningar
//SVAR response

//IF datumresponse > 0 (Kanske inte behövs)

//if varaibel18===0 && varaiabel21===0 allt är bokat (show9 och show6 = false)

//else visa allt (Kanske inte behövs)
    //Fetcha alla bokningar

    //Gå igenom mockfetch för att lösa logiken

}