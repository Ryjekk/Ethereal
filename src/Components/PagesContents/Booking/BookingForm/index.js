import React from "react";
import { Formik, ErrorMessage } from "formik";
import FormikControll from "./components/FormikContoll";
import * as Yup from 'yup'
import emailjs from 'emailjs-com';
import {
    FormInput,
    FormLabel,
    FormWrapper,
    FormButton,
    FormFieldset, FormStyled, ErrorSpan
} from "./stye";
import './style.css'

const design = [
    {key: 'Flashworks', value: 'Flashworks'},
    {key: 'Custom Design', value: 'Custom Design'}
]

const artist = [
    {key: 'Anna', value: 'Anna'},
    {key: 'Myrra', value: 'Myrra'}
]

const guests = [
    {key: 'Roman', value: 'Roman'},
    {key: 'Marta', value: 'Marta'},
    {key: 'Oakbranch', value: 'Oakbranch'},
    {key: 'Prostolinijna', value: 'Prostolinijna'},
    {key: 'Sianko', value: 'Sianko'}
]

const initialValues = {
    name: '',
    email: '',
    phone: '',
    etnicity: '',
    placement: '',
    size: '',
    description: '',
    design: '',
    artist: [],
    guests: [],
    howyoufindus: '',
    date: null
}
// todo api key
function sendEmail(data) {
    emailjs.send('etherealtattoo', 'etheraltattoo', data, `APIKEY HERE`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            alert(`🤯 There was problem with submitting your form, please try again. SERVER ERROR`)
            console.log(error.text);
        });
}

const onSubmit = (values, onSubmitProps) => {
    // console.log(values)
    const data = JSON.parse(JSON.stringify(values))
    sendEmail(data)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    placement: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    design: Yup.string().required('Required'),
    artist: Yup.array().required('Required'),
    date: Yup.date().required('Required').nullable(),
})

const BookingForm = () => {

    return (
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <FormStyled>
                    {/* Name */}
                    <FormLabel htmlFor="name"/>
                    <FormInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                    />
                    <ErrorMessage name="name" component={ErrorSpan}/>
                    {/* Email */}
                    <FormLabel htmlFor="email"/>
                    <FormInput
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email *"
                    />
                    <ErrorMessage name='email' component={ErrorSpan}/>
                    {/* Phone */}
                    <FormLabel htmlFor="phone"/>
                    <FormInput
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                    />
                    {/* From */}
                    <FormLabel htmlFor="etnicity"/>
                    <FormInput
                        id="etnicity"
                        name="etnicity"
                        type="text"
                        placeholder="Are you Local or Tourist"
                    />
                    {/* Artist*/}
                    <FormFieldset>
                        <FormikControll
                            control="checkbox"
                            label='Select Artists *'
                            name='artist'
                            options={artist}
                        />
                    </FormFieldset>
                    {/* Guests*/}
                    <FormFieldset>
                        <FormikControll
                            control="checkbox"
                            label='Select Guests'
                            name='guests'
                            options={guests}
                        />
                    </FormFieldset>
                    {/* Placement */}
                    <FormLabel htmlFor="placement"/>
                    <FormInput
                        id="placement"
                        name="placement"
                        type="text"
                        placeholder="Placement on your Body *"
                    />
                    <ErrorMessage name='placement' component={ErrorSpan}/>
                    {/* Size */}
                    <FormLabel htmlFor="size"/>
                    <FormInput
                        id="size"
                        name="size"
                        type="text"
                        placeholder="Approximate Size (in cm) *"
                    />
                    <ErrorMessage name='size' component={ErrorSpan}/>
                    {/* Design */}
                    <FormFieldset>
                        <FormikControll
                            control='radio'
                            label='Flashwork or custom design? *'
                            name='design'
                            options={design}
                        />
                    </FormFieldset>
                    {/* Date */}
                    <FormFieldset>
                        <FormikControll
                            control="date"
                            label="Pick a date *"
                            name="date"
                        />
                    </FormFieldset>
                    {/* Desc */}
                    <FormikControll
                        control='textarea'
                        name='description'
                        placeholder="Tattoo Description. Please send link to chosen Flashwork, or describe a custom design. [you can provide links to inspiration]"
                    />
                    {/* How */}
                    <FormLabel htmlFor="source"/>
                    <FormInput
                        id="howyoufindus"
                        name="howyoufindus"
                        type="text"
                        placeholder="How do you heard about us?"/>
                    <FormLabel>Please not that provided time is just an suggestion. Artist will send you an conformation by email.</FormLabel>
                    <FormButton value="submit" type="submit"> Book Appointment </FormButton>
                </FormStyled>
            </Formik>
        </FormWrapper>
    )
}

export default BookingForm;
