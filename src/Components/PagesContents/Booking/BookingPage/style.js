import styled from "styled-components";
import {QUERIES} from "../../../../Style";
// Assets
import bookingImg from '../../../../Assets/Backgrounds/b2a.JPG';

// todo fix parallax
export const BookingImg = styled.div` 
    background-image: url(${bookingImg});
    //object-fit: cover;
    //background-attachment: fixed;
    //background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 35vh;
    
    @media (${QUERIES.medium}) {
        background-size: cover;
        height: 45vh;
    }
`;

export const TextBox = styled.div`
    text-align: center;
    @media (${QUERIES.medium}) {
        padding: 0 15%;
    }
`;
