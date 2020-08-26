import styled from "styled-components";
import {COLORS, QUERIES, FONTS} from "../../../Style";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (${QUERIES.medium}) {
        padding: 0 15%;
    }
`;
export const FormStyled = styled.form`
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
        padding: 0 20px;
        font-family: Arial;
    }
    
    label {
        color: ${COLORS.darkGray};
        padding-right: 15px;
        font-family: Arial;
    }
    
    input {
        margin-right: 10px;
    }    
`;

export const FormLabel = styled.label`
    color: ${COLORS.darkGray};
    font-family: Arial;
    padding-bottom: 10px;
`;

export const FormInput = styled.input`
    color: ${COLORS.darkGray};
    padding: 10px 0;
    font-size: 16px;
    margin: 0 0 15px 0;
    border: none;
    border-bottom: 1px solid ${COLORS.darkestGray};
    outline: none;
    // background: transparent;
    background: rgba(255,255,255, .01);
    border-radius: 5px;
    padding-left: 15px;
    width: 100%;
`;

export const FormTextarea = styled.textarea`
    font-family: Arial;
    color: ${COLORS.darkGray};
    width: 100%;
    min-height: 100px;
    resize: none;
    // background: transparent;
    background: rgba(255,255,255, .01);
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 15px;
    border-radius: 5px;
`;

export const FormError = styled.div`
    color: orangered;
    font-weight: 400;
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
    font-size: 16px;
    cursor: pointer;
    
    :hover {
        background-color: ${COLORS.gray};
        transition: 0.1s background-color linear, 0.1s color linear;
        color:${COLORS.bgBlack};
    }
`;

export const FormSection = styled.div`
    display: flex;
    
`;