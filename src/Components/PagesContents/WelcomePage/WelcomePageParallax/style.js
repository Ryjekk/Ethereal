import styled from 'styled-components';
import {Paragraph, QUERIES, MediumHeading, ParallaxBox, CenterBox} from '../../../../Style';
import {Btn} from "../../../UI/DivBtn/style";
import bg from '../../../../Assets/Backgrounds/b0.jpg'

export const WelcomeCont = styled(ParallaxBox)`
    width: 100vw;
    height: 100vh;
    padding: 100px 0 50px 0;
    background-image: url(${bg});
   
    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const WelcomeBox = styled(CenterBox)`
    flex-direction: column;
    background-color: rgba(12, 12, 12, .7);
    padding: 25px 10px;
   
    @media (${QUERIES.medium}) {
        width: 50%;
        padding: 50px 0;
    }
`;

export const WelcomeHeading = styled(MediumHeading)`
    margin-bottom: 0;
`;

export const WelcomeParagraph = styled(Paragraph)`
    padding: 0 10px;
    text-align:center;
    display: none;
    @media (min-width: 1300px) {
        margin-top: 30px;
        display: block;
    }
`;

export const WelcomeParagraphSmall = styled(Paragraph)`
    padding: 0 10px;
    text-align:center;
    
    @media (min-width: 1300px) {
        margin-top: 30px;
        display: none;
    }
`;

export const WelcomeDivBtn = styled(Btn)`
    z-index: 1;
     @media (${QUERIES.medium}) {
        margin-top: 30px;
     }
`;
