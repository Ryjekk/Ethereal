import React from "react";
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ErrorMessage} from "formik";
import {ErrorSpan, FormInput, FormLabel} from "../stye";

const DatePicker = (props) => {
    const {label, name, ...rest} = props
    return(
        <>
            <legend>{label}</legend>
            <FormLabel htmlFor={name}/>
            <FormInput name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                    }
                }
            </FormInput>
            <ErrorMessage name={name} component={ErrorSpan}/>
        </>
    )
}

export default DatePicker;
