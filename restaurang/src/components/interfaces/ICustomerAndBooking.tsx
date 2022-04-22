import { IBooking } from "./IBooking";
import { ICustomerInfo } from "./ICustomerInfo";

export interface ICustomerAndBooking {
    booking: IBooking
    customerData: ICustomerInfo;
  }