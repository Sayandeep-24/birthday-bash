import { Form, Button } from "semantic-ui-react";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import PhoneInputWithCountry, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import db from "../../firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

export default function FormInput() {

  const { register, handleSubmit, formState: { errors }, control,} = useForm();

  const onSubmit = (data, e ) => {
    setFormData(data);
    try {
      addDoc(collection(db, "users"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    e.target.reset();
  };
  const [formData, setFormData] = useState();
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 15 })}
          />
        </Form.Field>
        {errors.firstName && <p>Please check the First Name</p>}
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true, maxLength: 15 })}
          />
        </Form.Field>
        {errors.lastName && <p>Please check the Last Name</p>}
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && <p>Please check the Email</p>}
        <Form.Field>
          <label htmlFor="dob">Date of Birth</label>
          <Controller
            control={control}
            name="dob"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={moment().toDate()}
                maxDate={moment().toDate()}
              />
            )}
          />
        </Form.Field>
        {errors.dob && <p>Please check the date of birth</p>}

        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            type="text"
            {...register("address", { required: true, maxLength: 50 })}
          />
        </Form.Field>
        {errors.address && <p>Please check the Address</p>}
        <Form.Field>
          <label htmlFor="phone">Phone Number</label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              validate: (value) => isValidPhoneNumber(value),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInputWithCountry
                inputExtraProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                value={value}
                onChange={onChange}
                defaultCountry={"IN"}
              />
            )}
          />
        </Form.Field>
        {errors.phone && <p>Please check the Phone number</p>}

        <Form.Field>
          <label>State</label>
          <input
            placeholder="State"
            type="text"
            {...register("state", { required: true, maxLength: 15 })}
          />
        </Form.Field>
        {errors.state && <p>Please check the State</p>}
        <Form.Field>
          <label>Size(in pounds) </label>
          <input
            placeholder="Size"
            type="number"
            {...register("Size", { required: true, min: 1, max: 10 })}
          />
        </Form.Field>
        {errors.Size && (
          <p>Please check the size of cake, cannot be more than 10 pounds</p>
        )}
        <Form.Field>
          <label htmlFor="flavour">Select flavour of Cake</label>
          <select name="flavour" {...register("flavour", { required: true })}>
            <option value="" />
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate </option>
            <option value="Butterscotch">Butterscotch </option>
          </select>
        </Form.Field>
        {errors.flavour && <p>Please check the flavour of the cake</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
