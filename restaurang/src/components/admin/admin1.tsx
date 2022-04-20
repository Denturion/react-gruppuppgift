import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";
import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { ICustomerInfo } from "../interfaces/ICustomerInfo";

export function Admin1() {

    let customerAndBookingList: ICustomerAndBooking[] = [];
  const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([])
    const [bookings, setBookings] = useState<IBooking[]>([]);

    useEffect(() => {

        bajs();

        async function bajs() {
            const result = await 
            axios
            .get<IBooking[]>(
                "https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e",
            ).then((response) =>{
                return (response.data)
            })
            setBookings(result)
        }
    }, []);


    useEffect(() => {

        async function denna(customer:string) {
            const result = await axios
            .get(
                `https://school-restaurant-api.azurewebsites.net/customer/${customer}`,
            ).then((response)=>{
                return response.data[0];
            });

            //Promise här??
            return result;
        }
        
        const test = bookings.map(async (e)=>{
            const hej = await denna(e.customerId);
            //PROMISE Vart? ??? //NÄR SKA JAG ANVÄNDA TEST? ÄR DET PÅ DEN JAG SKA SÄTTA PROMISE?
            customerAndBookingList.push({ booking: e, customerData: hej  }); 
        });

    }, [bookings]);


    //VART SKA DENNA VARA?
    //setCustomerAndBooking(customerAndBookingList);

    console.log(customerAndBookingList)

    return (
        <div>

        </div>
    );
}
