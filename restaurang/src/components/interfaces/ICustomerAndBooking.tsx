import { ICustomerInfo } from "./ICustomerInfo";

export interface ICustomerAndBooking {
    bookingId: string;
    customerId: string;
    customerData: ICustomerInfo;
  }