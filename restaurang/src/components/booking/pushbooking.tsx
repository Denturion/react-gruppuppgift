import { IBookingCustomer } from "../interfaces/IBookingCustomer";
import { ICustomer } from "../interfaces/ICustomer";


export function pushBooking(time: string, mydate: string, guests: number, customer: ICustomer) {

    let restaurantID = "624ff35c138a40561e115f1e";

    let bookingToPush: IBookingCustomer = {
        restautantID: restaurantID,
        date: mydate,
        time: time,
        numberOfGuests: guests,
        customer: customer
    }

    return {};
}