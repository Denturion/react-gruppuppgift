import { useState } from "react";
import Calendar from 'react-calendar';
import { CalendarContainer } from "./calendarstyles";

export function BookingCalendar (){
    const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  function callAPI() {
    setShow(!show);
  };
  function resetShow() {
    setShow(false);
  };

  function timeBooking(time:number) {
    console.log(time);
    console.log(date)
  };

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
        {show && (
          <div className='freeTime'>
            <p>Tryck på tiden för att komma vidare till bokning</p>
            <div className='times'>
              <button className='freeTables' onClick={()=>{timeBooking(6)}}>18.00</button>
              <button className='freeTables' onClick={()=>{timeBooking(9)}}>21.00</button>
            </div>
          </div>
        )}
      </div>
    </CalendarContainer>
}