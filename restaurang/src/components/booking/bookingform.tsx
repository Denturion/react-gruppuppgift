import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"
import { ICustomer } from "../interfaces/ICustomer";
import { NumberOfGuests } from "./numberOfGuests";
import { postBooking } from "./postbooking"



interface IBookingFormProps {
    time: string,
    myDate: string
    guests: number;
    submitComplete(arg: boolean): void
}
export function BookingForm(props: IBookingFormProps) {

    const [newUser, setNewUser] = useState<ICustomer>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    });


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;

        setNewUser({ ...newUser, [name]: e.target.value });

    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //PUSH BOOKING TO API
        postBooking(props.myDate, props.time, props.guests, newUser);

        //Submit Complete, show message in Parent
        props.submitComplete(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Förnamn:</label>
                <input id="name" type="text" name="name" value={newUser.name} onChange={handleChange} />

                <label htmlFor="lastname">Efternamn:</label>
                <input id="lastname" type="text" name="lastname" value={newUser.lastname} onChange={handleChange} />

                <label htmlFor="email">E-post:</label>
                <input id="email" type="email" name="email" value={newUser.email} onChange={handleChange} />

                <label htmlFor="phone">Telefonnummer:</label>
                <input id="phone" type="text" name="phone" value={newUser.phone} onChange={handleChange} />


                <input type="submit" value="Submit" />
            </form>
        </>
    )

}