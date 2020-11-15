import styled from "styled-components";
import {COLORS, QUERIES, FONTS, CenterBox} from "../../../../Style";
import {Form, Field } from "formik";

export const FormWrapper = styled(CenterBox)`
    font-family: Arial;

    @media (${QUERIES.medium}) {
        padding: 0 15%;
    }
`;
export const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const FormFieldset = styled.fieldset`
    border: 1px solid ${COLORS.darkestGray};
    border-radius: 5px;
    margin 20px 0;

    legend {
        color: ${COLORS.darkGray};
        padding: 10px 20px;
    }

    label {
        color: ${COLORS.darkGray};
        padding-right: 15px;
    }

    input {
        margin-right: 10px;
    }
`;

export const FormLabel = styled.label`
    color: ${COLORS.darkGray};
    padding-bottom: 10px;
`;

export const FormInput = styled(Field)`
    color: ${COLORS.darkGray};
    padding: 10px 0;
    font-size: 16px;
    margin: 0 0 15px 0;
    border: none;
    border-bottom: 1px solid ${COLORS.darkestGray};
    outline: none;
    background: rgba(255,255,255, .01);
    border-radius: 5px;
    padding-left: 15px;
    width: 100%;

    &::after {
        color: orangered;
        content: "*";
        opacity: 1;
        margin: -15px 0 0 4px;
    }
`;

export const FormButton = styled.button`
    align-self: center;
    text-transform: uppercase;
    font-family: ${FONTS.fontThree};
    border-color: #4CAF50;
    color: ${COLORS.gray};
    border: 2px solid;
    background-color: transparent;
    padding: 14px 28px;
    margin-top: 35px;
    font-size: 16px;
    cursor: pointer;

    :hover {
        background-color: ${COLORS.gray};
        transition: 0.1s background-color linear, 0.1s color linear;
        color:${COLORS.bgBlack};
    }
`;

export const ErrorSpan = styled.p`
    font-size: 14px;
    color: orangered;
    margin-top: 10px;
    margin-bottom: 10px;
`;
