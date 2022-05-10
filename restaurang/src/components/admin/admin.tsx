import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookingCalendar } from "../booking/bookingcalendar";
import { IBooking } from "../interfaces/IBooking";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { putSubmits } from "./putsubmits";
import "./css/admin.css";
import { AdminForm } from "./adminform";


export function Admin() {

    const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([]);

    //CONST FOR HTML WHAT SHOWS WHEN
    const [show, setShow] = useState(9999999999999);
    const [customer, setCustomer] = useState(9999999999999);
    const [showBooking, setShowBooking] = useState(false);
    const [submitCompleted, setSubmitCompleted] = useState(false);

    useEffect(() => {
        getBookingAndCustomers();
    }, []);

    //FETCH API AND PUT EVERYTHING IN CUSTOMERANDBOOKING
    function getBookingAndCustomers() {

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624ff35c138a40561e115f1e")
            .then(async (bookings) => {
                let customerPromises = bookings.data.map(async (booking) => {
                    let customer = await axios.get(
                        `https://school-restaurant-api.azurewebsites.net/customer/${booking.customerId}`
                    )
                    return customer.data[0];
                });
                let customers = await Promise.all(customerPromises);

                let customerAndBooking = bookings.data.map(async (booking, i) => {
                    let oneboking: ICustomerAndBooking = { booking: booking, customerData: customers[i] };
                    return oneboking
                });
                let customerAndBookingList = await Promise.all(customerAndBooking);
                setCustomerAndBooking(customerAndBookingList);
            });
    }

    //SUBMIT FROM FORM
    function handleSubmits(data: any, index: number) {
        setShow(9999999999999);
        let array = [...customerAndBooking];

        //CALLING PUTSUMBIT FUNCTION IN OTHER TSFILE TO CHANGE CUSTOMER IN API
        //RETURNS NEW ARRAY WITH UPDATED BOOKING IN THE ARRAY
        let newCustomerAndBooking = putSubmits(array, data, index);

        setCustomerAndBooking(newCustomerAndBooking);
    }

    //WHEN "UPPDATERA BOKNING" IS PRESSED SHOW THE FORM
    function updateBooking(index: number) {

        if (show === index) {
            setShow(9999999999999)
        }
        else {
            setShow(index);
        }
    };

    // BUTTON TO SHOW MORE CUSTOMER INFO JUST CHANGING HTML
    function showCustomerInfo(index: number) {

        if (customer === index) {
            setCustomer(9999999999999)
        }
        else {
            setCustomer(index);
        }

        if(show === index){
            setShow(9999999999999)
        }
    };

    //DELETE BOOKING FROM BOTH OUR CUSTOMERANDBOOKING LIST AND API
    function deleteBooking(idToDelete: string, index: number) {
        setCustomer(9999999999999);
        let array = [...customerAndBooking];
        array.splice(index, 1);
        setCustomerAndBooking(array);
        axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${idToDelete}`);
    }

    //SHOW MESSAGE WHEN FORM FOR UPDATE BOOKING IS COMPLETE
    function submitComplete() {
        setSubmitCompleted(true);
        setShowBooking(false);

        setTimeout(() => {
            setSubmitCompleted(false);
          }, 2000);
    }

    //SHOW BOOKING COMPONENT TO CREATE BOOKING FROM ADMIN
    function newBooking() {
        setShowBooking(!showBooking)
    }

    ////////
    //HTML//
    ///////

    //CREATE HTML FOR EACH CUSTOMER
    let customerdata = customerAndBooking.map((data, i) => {
        return (
            <div key={i}>
                <h1>{data.customerData.name} {data.customerData.lastname}</h1>
                <p>Bokningsid: {data.booking._id}</p>
                <p>Kundid: {data.customerData._id}</p>
                <button onClick={() => { showCustomerInfo(i) }}>Se mer information</button>

                {(customer === i) &&
                    <>
                        <h2>Kundinformation</h2>
                        <p>Namn: {data.customerData.name} {data.customerData.lastname}</p>
                        <p>E-post: {data.customerData.email}</p>
                        <p>Telefonnummer: {data.customerData.phone}</p>

                        <h2>Bokningsinformation</h2>
                        <p>Datum: {data.booking.date}</p>
                        <p>Tid: {data.booking.time}</p>
                        <p>Antal gäster: {data.booking.numberOfGuests.toString()}</p>

                        <button onClick={() => { deleteBooking(data.booking._id, i) }}>Ta bort bokning</button>
                        <button onClick={() => { updateBooking(i) }}>Uppdatera bokning</button>
                    </>
                }
                {(show === i) && <AdminForm info={data} index={i} handleSumbits={handleSubmits}></AdminForm>}
            </div>
        )
    });

    //PUT EVERYTHING TOGHETER, NEWBOOKING BUTTON AND CUSTOMERDATA ALLWAYS SHOWS
    return (
        <>
            <div className="newbooking">
                <button onClick={newBooking}>Ny bokning</button>
            </div>
            {showBooking &&
                (showBooking && !submitCompleted) && <BookingCalendar submitComplete={submitComplete}></BookingCalendar>
            }
            {submitCompleted && (
                <div>
                    Din bokning är nu inskickad och visas nästa gång du kommer in på sidan!
                </div>
            )}
            <div className="CustomerData">
                {customerdata}
            </div>
        </>
    );
}
