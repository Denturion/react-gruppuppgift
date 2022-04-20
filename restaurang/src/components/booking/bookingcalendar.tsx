import { useState } from "react";
import Calendar from 'react-calendar';
import { BookingForm } from "./bookingform";

import { FindFreeTables } from "./findfreetables";
import { CalendarContainer } from "./stylecomponens/calendarstyles";
import { NumberOfGuests } from "./numberOfGuests";

interface IBookingCalendarProps {
  submitComplete(arg: boolean): void
}
export function BookingCalendar(props: IBookingCalendarProps) {
  const [date, setDate] = useState(new Date());
  const [showTimes, setShowTimes] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [bookingTime, setbookingTime] = useState("");
  const [submitCompleted, setSubmitCompleted] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  function guests(number: number) {
    setNumberOfGuests(number);
  }

  function findTable() {
    setShowTimes(true);
    setShowForm(false);

  };

  function timeBooking(time: string) {
    setbookingTime(time);
    setShowForm(true);
  };

  function resetShow() {
    setShowTimes(false);
    setShowForm(false);
  };

  function submitComplete() {
    setSubmitCompleted(true);
    props.submitComplete(true);
  }

  return (
    <>
      <CalendarContainer>
        <Calendar onClickDay={setDate} onChange={resetShow} value={date}
          maxDate={new Date(2023, 1, 1)} // Sätter sista datum för bokning
          minDate={new Date()} //Gör så att allt innan dagens datum är disabled
          nextLabel='>>'
          nextAriaLabel='Go to next month'
          prevLabel='<<'
          prevAriaLabel='Go to prev month' />

        <div className='info'>
          <div>
            <p className='text-center'>
              <span className='bold'>Valt datum:</span>{' '}
              {date.toLocaleDateString()}
            </p>
            <NumberOfGuests guests={guests}></NumberOfGuests>
            <button className='freeTables' onClick={findTable}>Se lediga bord</button>
          </div>
          {showTimes && (
            <FindFreeTables date = {date.toLocaleDateString()} numberOfGuests = {numberOfGuests} time = {timeBooking}></FindFreeTables>
          )}
        </div>
      </CalendarContainer>

      {(showForm && !submitCompleted) && (
      <>
      <p>Vald tid: {bookingTime}</p>
      <BookingForm time={bookingTime} myDate={date.toLocaleString()} guests={numberOfGuests} submitComplete={submitComplete}></BookingForm>
      </>)}
      {submitCompleted && (
        <div>
          KLAAAR
        </div>
      )}
    </>
  )
}