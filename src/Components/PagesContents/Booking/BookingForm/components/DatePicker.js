import React from "react";
import {Field} from "formik";
import {DatePicker as PickerDate} from 'formik-material-ui-pickers';


const DatePicker = (props) => {
    const {label, name, ...rest} = props
    return(
        <>
            <Field component={PickerDate} name={name} label={label} style={{marginBottom: "10px"}} />
        </>
    )
}
export default DatePicker;
