import styled from "styled-components";
import {QUERIES, Inner, MediumHeading, ParallaxBox} from "../../../../Style";
import aboutImg from '../../../../Assets/aboutImg.jpg';


export const InnerRow = styled(Inner)`
    flex-direction: column;

    @media (${QUERIES.medium}) {
        flex-direction: row;
    }
`;

export const AboutImg = styled(ParallaxBox)` 
    background-image: url(${aboutImg});
    height: 35vh;
    margin-top: 35px;
    background-attachment: inherit;
    
    @media (${QUERIES.medium}) {
        height:80vh;
        width: 50%;
        margin-right: 17px;
        margin-top: 0px;
    }
`;

export const AboutBox = styled.div`
    @media (${QUERIES.medium}) {
        max-width: 50%; 
        margin-left: 17px;
    }   
`;

export const AboutHeading = styled(MediumHeading)`
    @media (${QUERIES.medium}) { 
        margin-top: 0;
    } 
`;
