import styled from 'styled-components';
import {COLORS, Paragraph, QUERIES} from '../../../Style';

import bg from '../../../Assets/Spaces/space3.jpg'
import {FooterHeading} from "../FooterContent/style";
// TODO if you want paralax

export const WelcomeCont = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    // TODO if using paralax npm it have to be 100
    height: 70vh;
    padding: 100px 0 50px 0;
    
    // TODO if you want paralax
    background-image: url(${bg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   
    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const WelcomeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(12, 12, 12, .7);
    padding: 25px 10px;
   
    @media (${QUERIES.medium}) {
        width: 50%;
        padding: 50px 0;
    }
`;

export const WelcomeHeading = styled(FooterHeading)`
    margin-bottom: 0;
`;

export const WelcomeParagraph = styled(Paragraph)`
    padding: 0 10px;
    text-align:center;
`;