import React, {Component} from "react";
import emailjs from 'emailjs-com';
import {
    FormInput,
    FormLabel,
    FormTextarea,
    FormWrapper,
    FormButton,
    FormFieldset, FormStyled, FormSection, ErrorSpan
} from "./stye";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(el => el.length > 0 && (valid = false));
    return valid;
}

class BookingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            description: null,
            size: null,
            placement: null,
            formErrors: {
                name: "",
                email: "",
                description: "",
                size: "",
                placement: "",
            }
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        if(name === 'name') {
            formErrors.name = value.length < 3 ? 'Insert Name' : '';
        } else if (name === "email") {
            formErrors.email = emailRegex.test(value) ? '' : 'Invalid Email Address';
        } else if (name === 'description') {
            formErrors.description = value.length < 5 ? 'Please Provide Description Or Links To Design' : '';
        } else if (name === 'size') {
            formErrors.size = value.length < 2 ? 'Please Provide Size Of Tattoo' : '';
        } else if (name === "placement") {
            formErrors.placement = value.length < 2 ? 'Please Provide Placement Of Tattoo' : '';
        } else {
            return
        }

        this.setState({formErrors, [name]: value})
    }

    sendEmail = (e) => {
        if (formValid(this.state.formErrors)) {
            const apiKey = process.env.REACT_APP_API_KEY;
            e.preventDefault();
            emailjs.sendForm('etherealtattoo', 'etheraltattoo', e.target, `${apiKey}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    alert(`🤯 There was problem with submitting your form, please try again`)
                    console.log(error.text);
                });
            e.target.reset();
        } else {
            alert(`🤯 There was problem with submitting your form, please try again`)
        }
    }

    render() {
        const {formErrors} = this.state;

        return (
            <FormWrapper>
                <FormStyled onSubmit={this.sendEmail}>
                    {/* Name */}
                    <FormLabel htmlFor="name"/>
                    <FormInput
                        style={formErrors.name.length > 0 ? {borderBottom: "2px solid orangered"} : null}
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                        required
                        onChange={this.handleChange}/>
                    {formErrors.name.length > 0 && (<ErrorSpan>{formErrors.name}</ErrorSpan>)}
                    {/* Email */}
                    <FormLabel htmlFor="email"/>
                    <FormInput
                        style={formErrors.email.length > 0 ? {borderBottom: "2px solid orangered"} : null}
                        name="email"
                        type="text"
                        placeholder="Your email *"
                        required
                        onChange={this.handleChange}/>
                    {formErrors.email.length > 0 && (<ErrorSpan>{formErrors.email}</ErrorSpan>)}
                    {/* Phone */}
                    <FormLabel htmlFor="phone"/>
                    <FormInput name="phone" type="text" placeholder="Phone Number"/>
                    {/* Design */}
                    <FormFieldset>
                        <legend> Flashwork or custom design? </legend>
                        <label>
                            <input type="radio"
                                   value="Flashworks"
                                   name="design"
                                   required/>
                            Flashworks
                        </label>
                        <label>
                            <input type="radio"
                                   value="Custom Design"
                                   name="design"/>
                            Custom Design
                        </label>
                    </FormFieldset>
                    {/* Description */}
                    <FormLabel htmlFor="description"/>
                    <FormTextarea
                        style={formErrors.description.length > 0 ? {borderBottom: "2px solid orangered"} : null}
                        name="description"
                        type="text"
                        placeholder="Tattoo Description. Please send link to chosen Flashwork, or describe a custom design. [you can provide links to inspiration] *"
                        required
                        onChange={this.handleChange}/>
                    {formErrors.description.length > 0 && (<ErrorSpan>{formErrors.description}</ErrorSpan>)}
                    {/* Artist */}
                    <FormFieldset>
                        <legend> Select Artist </legend>
                        <label>
                            <input type="radio"
                                   value="Anna"
                                   name="artist"/>
                            Anna
                        </label>
                        <label>
                            <input type="radio"
                                   value="Anna2"
                                   name="artist"/>
                            Anna2
                        </label>
                    </FormFieldset>
                    {/* Size */}
                    <FormLabel htmlFor="size"/>
                    <FormInput
                        style={formErrors.size.length > 0 ? {borderBottom: "2px solid orangered"} : null}
                        name="size"
                        type="text"
                        placeholder="Approximate Size (in cm) *"
                        required
                        onChange={this.handleChange}/>
                    {formErrors.size.length > 0 && (<ErrorSpan>{formErrors.size}</ErrorSpan>)}
                    {/* Placement */}
                    <FormLabel htmlFor="placement"/>
                    <FormInput
                        style={formErrors.placement.length > 0 ? {borderBottom: "2px solid orangered"} : null}
                        name="placement"
                        type="text"
                        placeholder="Placement on your Body *"
                        required
                        onChange={this.handleChange}/>
                    {formErrors.placement.length > 0 && (<ErrorSpan>{formErrors.placement}</ErrorSpan>)}
                    {/* Colour */}
                    <FormFieldset>
                        <legend> Tattoo Colour </legend>
                        <label>
                            <input type="radio"
                                   value="Colour"
                                   name="color"/>
                            Colour
                        </label>
                        <label>
                            <input type="radio"
                                   value="Black & Gray"
                                   name="color"/>
                            Black & Gray
                        </label>
                    </FormFieldset>
                    {/* Availability Date */}
                    {/* Availability time */}
                    <FormLabel htmlFor="dates"> Please provide date and time. We are open 09:00-18:00 </FormLabel>
                    <FormSection>
                    <FormInput
                        style={{marginRight: '10px'}}
                        name="dates"
                        type="date"
                        min="2020-08-01"
                        required/>
                    <FormLabel htmlFor="time"/>
                    <FormInput
                        style={{marginLeft: '10px'}}
                        name="time"
                        type="time"
                        min="09:00"
                        max="18:00"
                        required/>
                    </FormSection>
                    {/* Button */}
                    <FormButton value="submit" type="submit"> Book Appointment </FormButton>
                </FormStyled>
            </FormWrapper>
        )
    }
}

export default BookingForm;