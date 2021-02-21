import React, {useState} from "react";
import { Formik , Field } from "formik";
import FormikControll from "./components/FormikContoll";
import * as Yup from 'yup'
import emailjs from 'emailjs-com';
import {
    FormLabel,
    FormWrapper,
    FormButton,
    FormStyled
} from "./stye";
import { TextField } from 'formik-material-ui';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import './style.css'
import Popup from "./components/popup";

const design = [
    'Flashworks', 'Custom Design'
]

const artist = [
    'Anna', 'Myrra', 'Eerie.m'
]

const guests = [
    'Roman',
    'Bymosler',
    'Oakbranch',
    'Prostolinijna',
    'Sianko',
    'SztukaWojny',
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
    const [showPopup, SetPopup] = useState(false)

    const sendEmail = (data, onSubmitProps) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        emailjs.send('etherealtattoo', 'etheraltattoo', data, `${apiKey}`)
            .then((result) => {
                console.log(result.text);
                onSubmitProps.resetForm()
                SetPopup(true)
            }, (error) => {
                alert(`🤯 There was problem with submitting your form, please try again. SERVER ERROR`)
                console.log(error.text);
            });
    }

    const onSubmit = (values, onSubmitProps) => {
        const date = values.date.toUTCString();
        const transformedData = {...values, date}
        const data = JSON.parse(JSON.stringify(transformedData))
        sendEmail(data, onSubmitProps)
        // onSubmitProps.resetForm()
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {showPopup === false ? '' : <Popup/>}
        <FormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <FormStyled>
                    {/* Name */}
                    <FormLabel htmlFor="name"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                    />
                    {/* Email */}
                    <FormLabel htmlFor="email"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email *"
                    />
                    {/* Phone */}
                    <FormLabel htmlFor="phone"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                    />
                    {/* From */}
                    <FormLabel htmlFor="etnicity"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="etnicity"
                        name="etnicity"
                        type="text"
                        placeholder="Are you Local or Tourist"
                    />
                    {/* Artist*/}
                        <FormikControll
                            control="select"
                            label='Select Artists *'
                            name='artist'
                            multiselect={true}
                            options={artist}
                        />
                    {/* Guests*/}
                        <FormikControll
                            control="select"
                            label='Select Guests'
                            name='guests'
                            multiselect={true}
                            options={guests}
                        />
                    {/* Placement */}
                    <FormLabel htmlFor="placement"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="placement"
                        name="placement"
                        type="text"
                        placeholder="Placement on your Body *"
                    />
                    {/* Size */}
                    <FormLabel htmlFor="size"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="size"
                        name="size"
                        type="text"
                        placeholder="Approximate Size (in cm) *"
                    />
                    {/* Design */}
                        <FormikControll
                            control="select"
                            multiselect={false}
                            label='Flashwork or custom design? *'
                            name='design'
                            options={design}
                        />

                    {/* Date */}
                        <FormikControll
                            control="date"
                            label="Pick a date * [for the guest spot artist you will be subscribed to the waiting list]"
                            name="date"
                        />
                    {/* Desc */}
                    <FormikControll
                        control='textarea'
                        name='description'
                        placeholder="Tattoo Description. Please send link to chosen Flashwork, or describe a custom design. [you can provide links to inspiration]"
                    />
                    {/* How */}
                    <FormLabel htmlFor="source"/>
                    <Field
                        component={TextField}
                        variant='outlined'
                        id="howyoufindus"
                        name="howyoufindus"
                        type="text"
                        placeholder="How do you hear about us?"/>
                    <FormLabel>Please note that provided time is just a suggestion. Artist will send you a conformation by email.</FormLabel>
                    <FormButton value="submit" type="submit"> Book Appointment </FormButton>
                </FormStyled>
            </Formik>
        </FormWrapper>
        </MuiPickersUtilsProvider>
    )
}

export default BookingForm;
