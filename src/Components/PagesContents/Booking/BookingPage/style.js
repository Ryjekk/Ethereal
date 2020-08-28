import styled from "styled-components";
import {QUERIES} from "../../../../Style";
// Assets
import bookingImg from '../../../../Assets/Panorama/panoOne.jpg';


// TODO same wrappers for pictures
export const BookingImg = styled.div` 
    background-image: url(${bookingImg});
    object-fit: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    height: 45vh;
    filter: grayscale(.5) brightness(.8);
    
    @media (${QUERIES.medium}) {
        background-size: cover;
        background-position: center;
    }
`;

export const TextBox = styled.div`
    text-align: center;
    @media (${QUERIES.medium}) {
        padding: 0 15%;
    }
`;