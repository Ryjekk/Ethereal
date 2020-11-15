import React from "react";
import RadioButton from "./RadioButton";
import DatePicker from "./DatePicker";
import CheckboxGroup from "./CheckboxGroup";
import TextArea from "./TextArea";

const FormikControll = (props) => {
    const {control, ...rest} = props
    switch (control) {
        case 'checkbox': return <CheckboxGroup {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'radio': return <RadioButton {...rest}/>
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormikControll;
