import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { ICustomer } from "../interfaces/ICustomer";
import { NumberOfGuests } from "./numberOfGuests";
import { postBooking } from "./postbooking";
import { useForm } from "react-hook-form";

interface IBookingFormProps {
    time: string;
    myDate: string;
    guests: number;
    submitComplete(arg: boolean): void;
}
export function BookingForm(props: IBookingFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            lastname: "",
            email: "",
            phone: "",
        },
    });

    const [newUser, setNewUser] = useState<ICustomer>({
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;

        setNewUser({ ...newUser, [name]: e.target.value });
    }

    function handleSubmits() {
        //PUSH BOOKING TO API
        postBooking(props.myDate, props.time, props.guests, newUser);

        //Submit Complete, show message in Parent
        props.submitComplete(true);
    }

    return (
        <div className="formdiv">
            <p>Datum: {props.myDate}</p>
            <p>Tid: {props.time}</p>
            <form
                onSubmit={handleSubmit((data) => {
                    handleSubmits();
                })}
            >
                <ul>
                    <li>
                        <label htmlFor="name">Förnamn:</label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: "Förnamn krävs" })}
                            value={newUser.name}
                            onChange={handleChange}
                        />
                        <span>{errors.name?.message}</span>
                    </li>
                    <li>
                        <label htmlFor="lastname">Efternamn:</label>
                        <input
                            id="lastname"
                            type="text"
                            {...register("lastname", { required: "Efternamn krävs" })}
                            value={newUser.lastname}
                            onChange={handleChange}
                        />
                        <span>{errors.lastname?.message}</span>
                    </li>
                    <li>
                        <label htmlFor="email">E-post:</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Mailadress krävs",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Ogiltig e-postadress",
                                },
                            })}
                            value={newUser.email}
                            onChange={handleChange}
                        />
                        <span>{errors.email?.message}</span>
                    </li>
                    <li>
                        <label htmlFor="phone">Telefonnummer:</label>
                        <input
                            id="phone"
                            type="text"
                            {...register("phone", {
                                required: "Telefonnummer krävs",
                                pattern: {
                                    value: /^[0-9]+$/i,
                                    message: "Endast siffror",
                                },
                            })}
                            value={newUser.phone}
                            onChange={handleChange}
                        />
                        <span>{errors.phone?.message}</span>
                    </li>
                </ul>
                <button type="submit">Boka</button>
            </form>
        </div>
    );
}
