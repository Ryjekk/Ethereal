import React from "react";
import emailjs from 'emailjs-com';
import {
    FormInput,
    FormLabel,
    FormTextarea,
    FormWrapper,
    FormButton,
    FormFieldset, FormStyled, FormError, FormSection
} from "./stye";

const BookingForm = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('etherealtattoo', 'etheraltattoo', e.target, `${apiKey}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                alert(`There was problem with submitting your form, please try again`)
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <FormWrapper>
            <FormStyled onSubmit={sendEmail}>
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
                        <input type="radio" value="Anna" name="artist"/>
                        Anna
                    </label>
                    <label>
                        <input type="radio" value="Anna2" name="artist"/>
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
                        <input type="radio" value="Colour" name="color"/>
                        Colour
                    </label>
                    <label>
                        <input type="radio" value="Black & Gray" name="color"/>
                        Black & Gray
                    </label>
                </FormFieldset>
                {/* Availability Date */}
                {/* Availability time */}
                <FormLabel htmlFor="dates"> Please provide date and time. We are open 09:00-18:00 </FormLabel>
                <FormSection>
                <FormInput style={{marginRight: '10px'}} name="dates" type="date" required/>
                <FormLabel htmlFor="time"/>
                <FormInput style={{marginLeft: '10px'}} name="time" type="time" min="09:00" max="18:00" required/>
                </FormSection>
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