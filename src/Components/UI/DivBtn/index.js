import React from "react";
import { Btn } from './style'

const DivBtn = (props) => {
    return (
        <Btn
            // disabled={props.disabled}
            // onClick={props.clicked}
        >
            {props.children}
        </Btn>
    );
};

export default DivBtn;