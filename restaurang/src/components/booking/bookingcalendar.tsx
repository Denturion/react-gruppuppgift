import { useState } from "react";
import Calendar from 'react-calendar';
import { BookingForm } from "./bookingform";

import { FindFreeTables } from "./findfreetables";
import { CalendarContainer } from "./mockups/stylecomponens/calendarstyles";
import { TestComponent } from "./test";

export function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTimes, setShowTimes] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [bookingTime, setbookingTime] = useState("");
  const [submitCompleted, setSubmitCompleted] = useState(false);



  function findTable() {
    setShowTimes(true);
    setShowForm(false);

    //Kalla på API för att hitta om det finns lediga bord
    //Skicka med datum
    FindFreeTables(date.toLocaleString())
  };
  function resetShow() {
    setShowTimes(false);
    setShowForm(false);
  };

  function timeBooking(time: string) {
    setbookingTime(time);
    setShowForm(true);
  };
  function submitComplete() {
    setSubmitCompleted(true);
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
            <TestComponent></TestComponent>
            <button className='freeTables' onClick={findTable}>Se lediga bord</button>
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

      {(showForm && !submitCompleted) && (<BookingForm time={bookingTime} myDate={date.toLocaleString()} submitComplete={submitComplete}></BookingForm>)}
      {submitCompleted && (
        <div>
          KLAAAR
        </div>
      )}
    </>
  )
}