import React from "react";
import {ErrorMessage, Field} from "formik";
import {ErrorSpan} from "../stye";
import {InputLabel, MenuItem, FormControl} from '@material-ui/core';
import {Select} from 'formik-material-ui';

const SelectGroup = (props) => {
    const {label, name, options, multiselect} = props
    return(
        <FormControl style={{margin: '10px 0'}}>
            <InputLabel htmlFor="tags" style={{ color: '#4e5559'}}>
                {label}
            </InputLabel>
            <Field
                style={{ paddingLeft: '10px'}}
                component={Select}
                name={name}
                type="text"
                multiple={multiselect}
            >
                {options.map(el => {
                    return (
                        <MenuItem key={el} value={el}>{el}</MenuItem>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component={ErrorSpan}/>
        </FormControl>
    )
}

export default SelectGroup
