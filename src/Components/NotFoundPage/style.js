import styled from "styled-components";
import { Overlay } from "../WelcomePage/style";
import { Paragraph, QUERIES, Inner } from "../../Style";

import Img404 from '../../Assets/skullBlack.jpg'

export const OverlayWrapper = styled(Overlay)`
    padding: 0 10px;
    background-image: url(${Img404});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top ;
    
    
    @media (${QUERIES.medium}) {
        padding: 0;
    }
`;

export const Paragraph404 = styled(Paragraph)`
    text-align: center;   
    padding: 0 50px;
`;

export const BottomBox = styled(Inner)`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #121212;
    opacity: .7;
    
    @media (${QUERIES.medium}) {
        padding: 50px 8%;
    }
`;