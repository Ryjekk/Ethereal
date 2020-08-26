import styled from 'styled-components';
import {COLORS, Paragraph, QUERIES} from '../../../Style';
import {FooterHeading} from "../FooterContent/style";
import {Btn} from "../../UI/DivBtn/style";
import bg from '../../../Assets/stars.jpg'

// TODO if you want paralax

export const WelcomeCont = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
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
    @media (${QUERIES.medium}) {
        margin-top: 30px;
    }
`;

export const WelcomeDivBtn = styled(Btn)`
    z-index: 1;
     @media (${QUERIES.medium}) {
        margin-top: 30px;
     }
`;