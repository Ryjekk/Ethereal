import React from "react";
import DatePicker from "./DatePicker";
import SelectGroup from "./SelectGroup";
import TextArea from "./TextArea";

const FormikControll = (props) => {
    const {control, ...rest} = props
    switch (control) {
        case 'select': return <SelectGroup {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormikControll;
