import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../interfaces/IBooking";
import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { ICustomerInfo } from "../interfaces/ICustomerInfo";

export function Admin2() {

    const [customerList, setCustomerList] = useState<ICustomerInfo[]>([]);
    const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([])
    const [bookings, setBookings] = useState<IBooking[]>([]);

    useEffect(() => {
        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then(async (bookings) => {
                let customerPromises = bookings.data.map(async (booking) => {
                    let customer = await axios.get(
                        `https://school-restaurant-api.azurewebsites.net/customer/${booking.customerId}`
                    )
                    return customer.data[0];
                });
                let customers = await Promise.all(customerPromises);

                let customerAndBooking = bookings.data.map(async (booking, i) => {
                    let onefullboking: ICustomerAndBooking = { booking: booking, customerData: customers[i] };
                    return onefullboking
                });
                let customerAndBookingList = await Promise.all(customerAndBooking);
                setCustomerAndBooking(customerAndBookingList);
            });
    }, []);

    function updateBooking(idToUpdate:string, index:number){
        let array = [...customerAndBooking]; 

        array[index] = {
            booking:{_id:array[index].booking._id, restaurantId:"624ff35c138a40561e115f1e", date:"", time:"", numberOfGuests:1, 
            customerId:array[index].booking.customerId}, customerData:{_id:array[index].customerData._id, name:"", lastname:"", email:"", phone:""}
        };

        console.log(array[index].booking)

        axios.put(`https://school-restaurant-api.azurewebsites.net/booking/update/${idToUpdate}`, array[index].booking);
        axios.put(`https://school-restaurant-api.azurewebsites.net/customer/update/${idToUpdate}`, array[index].customerData);

    }
    function deleteBooking(idToDelete:string, index:number){
        let array = [...customerAndBooking]; 
        array.splice(index, 1);
        setCustomerAndBooking(array);
        axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete${idToDelete}`);
    }

    let lis = customerAndBooking.map((data, i) => {
        return (
            <div key={i}>
                <p>{data.booking._id}</p>
                <p>{data.customerData.name}</p>
                <button onClick={()=>{deleteBooking(data.booking._id, i)}}>Delete</button>
                <button onClick={()=>{updateBooking(data.booking._id, i)}}>Uppdatera Bokning</button>
            </div>
        )
    });

    return (
        <div>
            {lis}
        </div>
    );
}
