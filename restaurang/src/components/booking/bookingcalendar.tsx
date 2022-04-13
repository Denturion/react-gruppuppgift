import { useState } from "react";
import Calendar from 'react-calendar';
import { BookingForm } from "./bookingform";

import { FindFreeTables } from "./findfreetables";
import { CalendarContainer } from "./stylecomponens/calendarstyles";
import { NumberOfGuests } from "./numberOfGuests";


export function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTimes, setShowTimes] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [bookingTime, setbookingTime] = useState("");
  const [submitCompleted, setSubmitCompleted] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [numberOfTables, setNumberOfTables] = useState(1);


  function guests(number: number) {
    setNumberOfGuests(number);

    setNumberOfTables(numberOfGuests/6);
  }


  function findTable() {
    setShowTimes(true);
    setShowForm(false);

    //Kalla på API för att hitta om det finns lediga bord
    //Skicka med datum
    FindFreeTables(date.toLocaleString(), numberOfGuests);
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
  }

  console.log(numberOfGuests)
  console.log(numberOfTables);
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

      {(showForm && !submitCompleted) && (<BookingForm time={bookingTime} myDate={date.toLocaleString()} guests={numberOfGuests} submitComplete={submitComplete}></BookingForm>)}
      {submitCompleted && (
        <div>
          KLAAAR
        </div>
      )}
    </>
  )
}