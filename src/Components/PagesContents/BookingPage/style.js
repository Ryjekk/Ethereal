import styled from "styled-components";
import {QUERIES} from "../../../Style";

import bookingImg from '../../../Assets/Panorama/panoOne.jpg';


// TODO same wrappers for pictures
export const BookingImg = styled.div` 
    background-image: url(${bookingImg});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 35vh;
    margin: 35px 0;
    filter: grayscale(.5) brightness(.8);
    
    @media (${QUERIES.medium}) {
        margin-top: 0px;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px 0;
`;