import styled from "styled-components";
import {Paragraph, ParallaxBox, QUERIES} from "../../../Style";

import Img404 from '../../../Assets/skullBlack.jpg'

export const OverlayWrapper = styled(ParallaxBox)`
    background-image: url(${Img404});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height:100vh;
    flex-direction: column;
    
    @media (${QUERIES.medium}) {
        padding: 0;
    }
`;

export const Paragraph404 = styled(Paragraph)`
    text-align: center;   
    padding: 0 50px;
    font-size: 13px;
`;