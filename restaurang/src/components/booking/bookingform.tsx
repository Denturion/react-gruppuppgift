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
    <>
      <form
        onSubmit={handleSubmit((data) => {
          handleSubmits();
        })}
      >
        <label htmlFor="name">Förnamn:</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Förnamn krävs" })}
          value={newUser.name}
          onChange={handleChange}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="lastname">Efternamn:</label>
        <input
          id="lastname"
          type="text"
          {...register("lastname", { required: "Efternamn krävs" })}
          value={newUser.lastname}
          onChange={handleChange}
        />
        <p>{errors.lastname?.message}</p>
        <label htmlFor="email">E-post:</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Mailadress krävs" })}
          value={newUser.email}
          onChange={handleChange}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="phone">Telefonnummer:</label>
        <input
          id="phone"
          type="text"
          {...register("phone", { required: "Telefonnummer krävs" })}
          value={newUser.phone}
          onChange={handleChange}
        />
        <p>{errors.phone?.message}</p>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
