import React from "react";
import {ErrorMessage} from "formik";
import {ErrorSpan, FormInput} from "../stye";

const RadioButton = (props) => {
    const {label, name, options, ...rest} = props
    return(
        <>
            <legend>{label}</legend>
            <FormInput name={name}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </FormInput>
            <ErrorMessage name={name} component={ErrorSpan}/>
        </>
    )
}

export default RadioButton
