import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookingCalendar } from "../booking/bookingcalendar";
import { IBooking } from "../interfaces/IBooking";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";
import { putSubmits } from "./putsubmits";
import "./css/admin.css";


export function Admin() {

    const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([]);

    //CONST FOR HTML WHAT SHOWS WHEN
    const [show, setShow] = useState(9999999999999);
    const [customer, setCustomer] = useState(9999999999999);
    const [showBooking, setShowBooking] = useState(false);
    const [submitCompleted, setSubmitCompleted] = useState(false);

    //CONST FOR REACT HOOK FORMS    
    const { register, handleSubmit, formState: { errors } } = useForm();

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
        let array = [...customerAndBooking];
        array.splice(index, 1);
        setCustomerAndBooking(array);
        axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${idToDelete}`);
    }

    //SHOW MESSAGE WHEN FORM FOR UPDATE BOOKING IS COMPLETE
    function submitComplete() {
        setSubmitCompleted(true);
        setShowBooking(false);
    }

    //SHOW BOOKING COMPONENT TO CREATE BOOKING FROM ADMIN
    function newBooking() {
        setShowBooking(!showBooking)
    }


    ////////
    //HTML//
    ///////

    //CREATE FORM WITH VALIDATION
    function useshowForm(info: ICustomerAndBooking, index: number) {

        console.log(info);

        return (
            <div>
                <form onSubmit={handleSubmit((data) => {
                    handleSubmits(data, index);
                })}>

                    <label htmlFor="firstName">Förnamn:</label>
                    <input id="firstName" type="text"{
                        ...register("firstName",
                            {
                                required: "Du måste skriva här",
                                minLength: {
                                    value: 2,
                                    message: "Måste vara minst 2 bokstäver"
                                }
                            }
                        )
                    }
                        defaultValue={info.customerData.name} />
                    <p>{errors.firstName?.message}</p>

                    <label htmlFor="lastName">Efternamn:</label>
                    <input id="lastName" type="text"{
                        ...register("lastName",
                            {
                                required: "Du måste skriva här",
                                minLength: {
                                    value: 2,
                                    message: "Måste vara minst 2 bokstäver"
                                }
                            }
                        )
                    }
                        defaultValue={info.customerData.lastname} />
                    <p>{errors.lastName?.message}</p>

                    <label htmlFor="email">E-post:</label>
                    <input id="email" type="email"{
                        ...register("email",
                            {
                                required: "Du måste skriva här",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Ogiltig epost adress"
                                }
                            }
                        )
                    }
                        defaultValue={info.customerData.email} />
                    <p>{errors.email?.message}</p>

                    <label htmlFor="phone">Telefonnummer:</label>
                    <input id="phone" type="text"{
                        ...register("phone",
                            {
                                required: "Du måste skriva här",
                                pattern: {
                                    value: /^[0-9]+$/i,
                                    message: "Endast siffror"
                                }
                            }
                        )
                    }
                        defaultValue={info.customerData.phone} />
                    <p>{errors.phone?.message}</p>

                    <label htmlFor="date">Datum:</label>
                    <p>Tänk på att dubbelkolla så att det finns bord innan du byter datum</p>
                    <input id="date" type="text"{
                        ...register("date",
                            {
                                required: "Du måste skriva här",
                                pattern: {
                                    value: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
                                    message: "Formatet för datumet måste vara yyyy-mm-dd"
                                }
                            }
                        )
                    }
                        defaultValue={info.booking.date} />
                    <p>{errors.date?.message}</p>

                    <label htmlFor="time">Tid:</label>
                    <p>Tänk på att dubbelkolla så att det finns bord innan du byter tid</p>
                    <select id="time" {...register("time")}>
                        <option value="18.00">18.00</option>
                        <option value="21-00">21.00</option>
                    </select>

                    <label htmlFor="guest">Antal Gäster:</label>
                    <input id="guest" type="number"{...register("guest")} defaultValue={info.booking.numberOfGuests} />

                    <input type="submit"></input>
                </form>
            </div>
        )
    }

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

                        <button onClick={() => { deleteBooking(data.booking._id, i) }}>Ta bort</button>
                        <button onClick={() => { updateBooking(i) }}>Uppdatera</button>
                    </>
                }
                {(show === i) && useshowForm(data, i)}
            </div>
        )
    });

    //PUT EVERYTHING TOGHETER, NEWBOOKING BUTTON AND CUSTOMERDATA ALLWAYS SHOWS
    return (
        <>
            <div>
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
