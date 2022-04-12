import { ICustomer } from "./ICustomer";

export interface IBookingCustomer {
    restautantID: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customer: ICustomer
}