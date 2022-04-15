import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { ICustomerInfo } from "../interfaces/ICustomerInfo";

export function Admin() {
  const [bookingList, setBookingList] = useState<IBooking[]>([
    {
      _id: "",
      restaurantId: "",
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    },
  ]);

  let customerAndBookingList: ICustomerAndBooking[] = [];
  const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([
      {
        bookingId: "",
        customerId: "",
        customerData: {_id: "", name: "", lastname: "", email: "", phone: ""}
      }
  ])

  useEffect(() => {
    if(bookingList.length > 1) return;
    else{
        axios
      .get<IBooking[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e"
      )
      .then((response) => {
        const apiBookings = response.data;
        setBookingList(apiBookings);
      });
    }
  }, []);

  

  useEffect(() => {
    bookingList.map((element) => {
      let customerId = element.customerId;
      if(customerId) {

      axios
        .get(
          `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
        )
        .then((response) => {
          let customerInfo = response.data[0];
          let newCustomerAndBooking: ICustomerAndBooking = {
            bookingId: element._id,
            customerId: element.customerId,
            customerData: customerInfo,
            
          };
          
          customerAndBookingList.push(newCustomerAndBooking);
          setCustomerAndBooking(customerAndBookingList);
          
        });
      }
  });
  }, [bookingList]);


  let lis = customerAndBooking.map((data, i) => {
    return (
    <li key={i}>
       {data.bookingId}
        </li>);
});

console.log(bookingList)


  return (
    <div>
      <p>Admin works!</p>
      <p>Booking Numbers:</p>
      <ul>
          {lis}
      </ul>
    </div>
  );
}
