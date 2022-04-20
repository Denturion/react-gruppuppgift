import axios from "axios";
import { useEffect, useState } from "react";
import { Booking } from "../booking/booking";
import { useForm } from "react-hook-form";
import { BookingCalendar } from "../booking/bookingcalendar";
import { IBooking } from "../interfaces/IBooking";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";


export function Admin() {

    const [customerAndBooking, setCustomerAndBooking] = useState<ICustomerAndBooking[]>([]);
    const [show, setShow] = useState(9999);
    const [showBooking, setShowBooking] = useState(false);
    const [submitCompleted, setSubmitCompleted] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        getBookingAndCustomers();
    }, []);

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
                    let onefullboking: ICustomerAndBooking = { booking: booking, customerData: customers[i] };
                    return onefullboking
                });
                let customerAndBookingList = await Promise.all(customerAndBooking);
                setCustomerAndBooking(customerAndBookingList);
            });

    }


    //UPPDATE BOOKING TAR DIG HIT
    function useshowForm(info: ICustomerAndBooking, index: number) {
        return (
            <div>
                <form onSubmit={handleSubmit((data)=>{
                    handleSubmits(data, index);
                })}>

                    <label htmlFor="firstName">Förnamn:</label>
                    <input id="firstName" type="text"{...register("firstName", {required: "Du måste skriva här", minLength:{value:2, message:"Måste vara 3 bokstäver"}})} defaultValue={info.customerData.name} />

                    <label htmlFor="date">Förnamn:</label>
                    <input id="date" type="text"{...register("date", {required: "Du måste skriva här", minLength:{value:2, message:"Måste vara 3 bokstäver"}})} defaultValue={info.booking.date} />
                    <p>{errors.firstName?.message}</p>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }


    function handleSubmits(data:any, index: number) {
        let array = [...customerAndBooking];

        array[index] = {
            booking: {
                _id: array[index].booking._id,
                restaurantId: "624ff35c138a40561e115f1e",
                date: "20/05-2022",
                time: "18:00",
                numberOfGuests: 1,
                customerId: array[index].booking.customerId
            },
            customerData: {
                _id: array[index].customerData._id,
                name: data.firstName,
                lastname: "lar",
                email: "hej",
                phone: "06006"
            }
        };
        let updatedBookingToPutToAPI = {
            id: array[index].booking._id,
            restaurantId: array[index].booking.restaurantId,
            date: array[index].booking.date,
            time: array[index].booking.time,
            numberOfGuests: array[index].booking.numberOfGuests,
            customerId: array[index].booking.customerId
        }
        let updatedCustomerToPutToAPI = {
            id: array[index].customerData._id,
            name: array[index].customerData.name,
            lastname: array[index].customerData.lastname,
            email: array[index].customerData.email,
            phone: array[index].customerData.phone
        }

        axios.put<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/update/" + updatedBookingToPutToAPI.id, updatedBookingToPutToAPI, { headers: { "content-type": "application/json" } })
            .then(response => {
                console.log(response);
            })
        axios.put<IBooking>("https://school-restaurant-api.azurewebsites.net/customer/update/" + updatedCustomerToPutToAPI.id, updatedCustomerToPutToAPI, { headers: { "content-type": "application/json" } })
            .then(response => {
                console.log(response);
            })

        setCustomerAndBooking(array);
    }


    function updateBooking(index: number) {
        setShow(index);
    };


    function deleteBooking(idToDelete: string, index: number) {
        let array = [...customerAndBooking];
        array.splice(index, 1);
        setCustomerAndBooking(array);
        axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${idToDelete}`);
    }

    function submitComplete() {
        setSubmitCompleted(true);
        setShowBooking(false);
    }
    function newBooking() {
        setShowBooking(true)
    }


    let lis = customerAndBooking.map((data, i) => {
        return (
            <div key={i}>
                <p>{data.booking._id}</p>
                <p>{data.customerData.name}</p>
                <button onClick={() => { deleteBooking(data.booking._id, i) }}>Delete</button>
                <button onClick={() => { updateBooking(i) }}>Uppdatera Bokning</button>
                {(show === i) && useshowForm(data, i)}
            </div>
        )
    });

    return (
        <>
            <div>
                <button onClick={newBooking}>Ny bokning</button>
            </div>
            <div>
                {lis}
            </div>
            {showBooking &&

                (showBooking && !submitCompleted) && <BookingCalendar submitComplete={submitComplete}></BookingCalendar>}
            {submitCompleted && (
                <div>
                    Din bokning är nu inskickad och visas nästa gång du kommer in på sidan!
                </div>
            )}
        </>
    );
}
