import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"

interface ICustomer {
    name: string,
    lastname: string,
    email: string,
    phone: string
}
interface IBooking {
    restautantID: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customer: ICustomer
}

interface IBookingFormProps{
    time:string,
    myDate:string
    submitComplete(arg: boolean): void
}
export function BookingForm(props: IBookingFormProps) {

    //Props innehåller tiden och datumet som personen tryckt på vi behöver lägga till antalet personer också

    let restaurantID = "624ff35c138a40561e115f1e";
    let date = props.myDate;
    let time = props.time;

    const [newUser, setNewUser] = useState<ICustomer>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;

        setNewUser({ ...newUser, [name]: e.target.value });

        console.log(newUser);
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(newUser);

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