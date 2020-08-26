import styled from "styled-components";
import {QUERIES, Inner} from "../../../Style";
import {FooterHeading} from "../../Contents/FooterContent/style";
import aboutImg from '../../../Assets/aboutImg.jpg';


export const InnerRow = styled(Inner)`
    flex-direction: column;

    @media (${QUERIES.medium}) {
        flex-direction: row;
    }
`;

export const AboutImg = styled.div` 
    background-image: url(${aboutImg});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 35vh;
    margin-top: 35px;
    
    @media (${QUERIES.medium}) {
        height:80vh;
        width: 50%;
        margin-right: 17px;
        margin-top: 0px;
    }
`;

export const AboutBox = styled.div`
    max-width: auto; 
    
    @media (${QUERIES.medium}) {
        max-width: 50%; 
        margin-left: 17px;
    }   
`;

export const AboutHeading = styled(FooterHeading)`
    text-transform: uppercase;
    white-space: pre-wrap;
    margin-top: 34px;
    
    @media (${QUERIES.medium}) { 
        margin-top: 0;
    } 
`;
