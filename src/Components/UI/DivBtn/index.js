import React from "react";
import { Btn } from './style'

const DivBtn = (props) => {
    return (
        <Btn>
            {props.children}
        </Btn>
    );
};

export default DivBtn;