import axios from "axios";
import { IBooking } from "../interfaces/IBooking";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";

export function putSubmits(array:ICustomerAndBooking[], data:any, index:number){

    //CREATING THE NEW ARRAY WITH INFORMATION FROM FORM
    array[index] = {
        booking: {
            _id: array[index].booking._id,
            restaurantId: "624ff35c138a40561e115f1e",
            date: data.date,
            time: data.time,
            numberOfGuests: data.guest,
            customerId: array[index].booking.customerId
        },
        customerData: {
            _id: array[index].customerData._id,
            name: data.firstName,
            lastname: data.lastName,
            email: data.email,
            phone: data.phone,
        }
    };

    //CREATING WHAT TO PUT FROM NEW ARRAY
    let updatedBookingToPutToAPI = {
        id: array[index].booking._id,
        restaurantId: array[index].booking.restaurantId,
        date: array[index].booking.date,
        time: array[index].booking.time,
        numberOfGuests: array[index].booking.numberOfGuests,
        customerId: array[index].booking.customerId
    }
    let updatedCustomerToPutToAPI = {
        id: array[index].customerData._id,
        name: array[index].customerData.name,
        lastname: array[index].customerData.lastname,
        email: array[index].customerData.email,
        phone: array[index].customerData.phone
    }

    //PUT IN API TO CHANGE BOOKING IN API
    axios.put<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/update/" + updatedBookingToPutToAPI.id, updatedBookingToPutToAPI, { headers: { "content-type": "application/json" } })
        .then(response => {
            console.log(response);
        })
    axios.put<IBooking>("https://school-restaurant-api.azurewebsites.net/customer/update/" + updatedCustomerToPutToAPI.id, updatedCustomerToPutToAPI, { headers: { "content-type": "application/json" } })
        .then(response => {
            console.log(response);
        })

        //RETURNING THE ARRAY TO ADMIN COMPONENT
        return(array);

}