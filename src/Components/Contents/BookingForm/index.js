import React from "react";
import {
    FormInput,
    FormLabel,
    FormTextarea,
    FormWrapper,
    FormButton,
    FormFieldset, FormStyled, FormError
} from "./stye";

const BookingForm = () => {
    return (

        <FormWrapper>
            <FormStyled method="POST">
                {/* Name */}
                <FormLabel htmlFor="name"/>
                <FormInput name="name" type="text" placeholder="Full Name" required/>
                {/* Email */}
                <FormLabel htmlFor="email"/>
                <FormInput name="email" type="text" placeholder="Your email" required/>
                {/* Phone */}
                <FormLabel htmlFor="phone"/>
                <FormInput name="phone" type="text" placeholder="Phone Number"/>
                {/* Design */}
                <FormFieldset>
                    <legend> Flashwork or custom design? </legend>
                    <label>
                        <input type="radio" value="Flashworks" name="design"/>
                        Flashworks
                    </label>
                    <label>
                        <input type="radio" value="Custom Design" name="design"/>
                        Custom Design
                    </label>
                </FormFieldset>
                {/* Description */}
                <FormLabel htmlFor="description"/>
                <FormTextarea name="description" type="text" placeholder="Tattoo Description. Please send link to chosen Flashwork, or describe a custom design. [you can provide links to inspiration]" required/>
                {/* Artist */}
                <FormFieldset>
                    <legend> Select Artist </legend>
                    <label>
                        <input type="checkbox" value="Anna"/>
                        Anna
                    </label>
                    <label>
                        <input type="checkbox" value="Anna2"/>
                        Anna2
                    </label>
                </FormFieldset>
                {/* Size */}
                <FormLabel htmlFor="size"/>
                <FormInput name="size" type="text" placeholder="Approximate Size (in cm)" required/>
                {/* Placement */}
                <FormLabel htmlFor="placement"/>
                <FormInput name="placement" type="text" placeholder="Placement on your Body" required/>
                {/* Colour */}
                <FormFieldset>
                    <legend> Tattoo Colour </legend>
                    <label>
                        <input type="checkbox" value="Colour"/>
                        Colour
                    </label>
                    <label>
                        <input type="checkbox" value="Black & Gray"/>
                        Black & Gray
                    </label>
                </FormFieldset>
                {/* Availability Date */}
                <FormLabel htmlFor="dates"> Please provide date and time </FormLabel>
                <FormInput name="dates" type="date" required/>
                {/* Availability time */}
                <FormInput name="dates" type="time" min="09:00" max="18:00" required/>
                {/* Errors */}
                <FormError>
                    <p>Error message here</p>
                </FormError>
                {/* Button */}
                <FormButton value="submit" type="submit"> Book Appointment </FormButton>
            </FormStyled>
        </FormWrapper>
    )
}

export default BookingForm;