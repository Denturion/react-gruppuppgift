import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";
import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { ICustomerInfo } from "../interfaces/ICustomerInfo";

export function Admin2() {

  let customerAndBookingList: ICustomerAndBooking[] = [];
  const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([])


  useEffect(() => {

    axios
      .get<IBooking[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e"
      )
      .then(async (response) => {

        const  myData = 
          response.data.map(async (booking) => {
            const customer = await fetchCustomer(booking.customerId)
            //const results = await Promise.all(customer);
            console.log(customer);
          });

          //Booking result == response.data

          //Customer Results


          //customerAndBookingList.push({ booking: response.data, customerData: results  }); 
      });
          //setCustomerAndBooking(customerandBookingList)
  }, [])

  const fetchCustomer = async (customer:string) => {
    axios
      .get(
        `https://school-restaurant-api.azurewebsites.net/customer/${customer}`
      )
      .then((response)=>{
        console.log(response.data[0]);

        //Lyckas inte returna???
        return (response.data[0])
      })
  };


  console.log("Customer and Booking", customerAndBooking)
  return (
    <div>

    </div>
  );
}
