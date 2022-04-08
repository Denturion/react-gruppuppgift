import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import { BookingForm } from "./bookingform";
import { CalendarContainer } from "./calendarstyles";

export function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTimes, setShowTimes] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingTime, setbookingTime] = useState("");


  function callAPI() {
    setShowTimes(!showTimes);
    setShowBooking(false);
  };
  function resetShow() {
    setShowTimes(false);
    setShowBooking(false);
  };

  function timeBooking(time: string) {
    setbookingTime(time);
    setShowBooking(true);
  };

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
            <button className='freeTables' onClick={callAPI}>Se lediga bord</button>
          </div>
          {showTimes && (
            <div className='freeTime'>
              <p>Tryck på tiden för att komma vidare till bokning</p>
              <div className='times'>
                <button className='freeTables' onClick={() => { timeBooking("18.00") }}>18.00</button>
                <button className='freeTables' onClick={() => { timeBooking("21.00") }}>21.00</button>
              </div>
            </div>
          )}
        </div>
      </CalendarContainer>
      {showBooking && (<BookingForm time={bookingTime} myDate={date.toString()}></BookingForm>)}
    </>
  )
}