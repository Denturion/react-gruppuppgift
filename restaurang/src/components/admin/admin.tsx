import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";

export interface ICustomerInfo {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface ICustomerAndBooking {
    bookingId: string;
    customerId: string,
    customerData: ICustomerInfo;
}

export function Admin() {
  const [bookingList, setBookingList] = useState<IBooking[]>([
    {
      id: "",
      restaurantId: "",
      date: "",
      time: "",
      numberOfGuests: 0,
      customerId: "",
    },
  ]);

  const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([
      {
      bookingId: "",
      customerId: "",
      customerData: {
          id: "",
          name: "",
          lastname: "",
          email: "",
          phone: "",
      },
  },
  ])

  const getBookings = () => {
    axios
      .get<IBooking[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e"
      )
      .then((response) => {
        const apiBookings = response.data;
        setBookingList(apiBookings);
      });
  };

  useEffect(() => {
    getBookings();
  }, []);

  let customerList : ICustomerInfo[] = []

  bookingList.forEach((element) => {
    let customerId = element.customerId;
    if (customerId){
    axios
      .get<ICustomerInfo>(
        `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
      )
      .then((response) => {
          customerList.push(response.data)
      });
    }
  });

  console.log(customerList);

  //const [customerInfo, setCustomerInfo] = useState<ICustomerInfo>(
    //{ id: "", name: "", lastname: "", email: "", phone: "" });

    
    //console.log(bookingList);
    //console.log("Kundlista: ", customerList);

    

  //SKAPA USEEFFECT
  //Skapa lista för alla kunder X
  //Mappa bookinglist ?
  //Gå igenom varje item i bookinglist och fetcha customerID info, X

  //Skapa en ny array 
  
  //Pusha customer ID info till kundlistan)

  //Skriv ut både bookinglist och kundlistan :)

  return (
    <div>
      <p>Admin works!</p>
      <p> {bookingList[0].date} </p>
    </div>
  );
}
