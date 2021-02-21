import styled from "styled-components";
import {COLORS, QUERIES, FONTS, CenterBox} from "../../../../Style";
import {Form} from "formik";

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

export const FormLabel = styled.label`
    color: ${COLORS.darkGray};
    padding-top: 10px;
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
