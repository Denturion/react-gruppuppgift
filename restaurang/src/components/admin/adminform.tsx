import { useForm } from "react-hook-form";
import { ICustomerAndBooking } from "../interfaces/ICustomerAndBooking";

interface IadminFormProps {
  info: ICustomerAndBooking;
  index: number;
  handleSumbits(arg1: any, arg2: number): void;
}
export function AdminForm(props: IadminFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          props.handleSumbits(data, props.index);
        })}
      >
        <label htmlFor="firstName">Förnamn:</label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", {
            required: "Förnamn krävs",
            minLength: {
              value: 2,
              message: "Måste vara minst 2 bokstäver",
            },
            maxLength: {
              value: 30,
              message: "Måste vara mindre än 30 bokstäver",
            },
          })}
          defaultValue={props.info.customerData.name}
        />
        <p>{errors.firstName?.message}</p>

        <label htmlFor="lastName">Efternamn:</label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", {
            required: "Efternamn krävs",
            minLength: {
              value: 2,
              message: "Måste vara minst 2 bokstäver",
            },
            maxLength: {
              value: 30,
              message: "Måste vara mindre än 30 bokstäver",
            },
          })}
          defaultValue={props.info.customerData.lastname}
        />
        <p>{errors.lastName?.message}</p>

        <label htmlFor="email">E-post:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Mailadress krävs",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ogiltig epost adress",
            },
          })}
          defaultValue={props.info.customerData.email}
        />
        <p>{errors.email?.message}</p>

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
            minLength: {
              value: 7,
              message: "Måste vara minst 7 siffror, inkl riktnummer",
            },
            maxLength: {
              value: 11,
              message: "Måste vara mindre än 11 siffror, inkl riktnummer",
            },
          })}
          defaultValue={props.info.customerData.phone}
        />
        <p>{errors.phone?.message}</p>

        <label htmlFor="date">Datum:</label>
        <input
          id="date"
          type="text"
          {...register("date", {
            required: "Du måste skriva här",
            pattern: {
              value: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
              message: "Formatet för datumet måste vara yyyy-mm-dd",
            },
          })}
          defaultValue={props.info.booking.date}
        />
        <p>{errors.date?.message}</p>

        <label htmlFor="time">Tid:</label>
        <select id="time" {...register("time")}>
          <option value="18.00">18.00</option>
          <option value="21-00">21.00</option>
        </select>

        <label htmlFor="guest">Antal Gäster: </label>
        <span>1-12</span>
        <input
          id="guest"
          type="number"
          {...register("guest", {
            min: {
              value: 1,
              message: "Minst 1 gäst",
            },
            max: {
              value: 12,
              message: "Max 12 gäster",
            },
          })}
          defaultValue={props.info.booking.numberOfGuests}
        />
        <p>{errors.guest?.message}</p>

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}
