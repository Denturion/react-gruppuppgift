import styled from "styled-components";

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  position: relative;
  z-index: -1;
  margin-top: 20px;
  background-color: black;
  padding: 10px;
  border-radius: 3px;
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      text-transform: uppercase;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    color: #ffb2b2;
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #ffdada;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;

    &:hover {
      background-color: #fa9999;
    }

    &:active {
      background-color: #fbc9c9;
    }

    &:disabled {
      opacity: 0.5;
    }
  }
  .freeTables {
    padding: 10px;
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */

  .react-calendar__month-view__days__day--weekend {
    color: black;
    background-color: #ffb2b2;
  }
  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px black;
    background-color: #fa9999;
    scale: 1.1;
    font-weight: bold;
  }
  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
