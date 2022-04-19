import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Main } from "./components/main/main";
import { Contact } from "./components/contact/contact";
import App from "./App";
import { NotFound } from "./components/notfound/notfound";
import { Layout } from "./components/layout/layout";
import { BookingCalendar } from "./components/booking/bookingcalendar";
import { Booking } from "./components/booking/booking";
import { Admin } from "./components/admin/admin";
import { Menu } from "./components/main/menu";
import { Admin1 } from "./components/admin/admin1";
import { Admin2 } from "./components/admin/admin2";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
