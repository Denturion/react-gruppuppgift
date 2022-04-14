import { ICustomer } from "./ICustomer";

export interface IBookingCustomer {
    restaurantId: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customer: ICustomer
}