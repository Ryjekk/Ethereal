import styled from "styled-components";
import {Paragraph, QUERIES, Options} from "../../../Style";

import Img404 from '../../../Assets/skullBlack.jpg'

export const OverlayWrapper = styled.div`
    background-image: url(${Img404});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const OptionsLink = styled(Options)`
    text-decoration: underline;
    letter-spacing: 1px;
`;