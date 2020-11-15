import React from "react";
import {ErrorMessage, Field} from "formik";
import {ErrorSpan, FormLabel} from "../stye";

const TextArea = (props) => {
    const {label, name, ...rest} = props
    return(
        <>
            <FormLabel htmlFor={name}/>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorSpan}/>
        </>
    )
}

export default TextArea
