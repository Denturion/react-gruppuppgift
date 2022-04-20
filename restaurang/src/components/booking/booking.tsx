import { BookingCalendar } from "./bookingcalendar";
import { BookingForm } from "./bookingform";
import "./css/booking.css";



export function Booking() {

    function submitComplete() {
      }
    return (
    <BookingCalendar submitComplete={submitComplete}></BookingCalendar>
    )


}