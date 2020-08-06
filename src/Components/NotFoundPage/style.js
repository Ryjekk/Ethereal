import styled from "styled-components";
import {Paragraph, QUERIES, COLORS, Inner, Options} from "../../Style";

import Img404 from '../../Assets/skullBlack.jpg'

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

export const BottomBox = styled(Inner)`
    width: 100%;
    bottom: 0;
    background-color: ${COLORS.bgBlack};
    opacity: .7;
    
    @media (${QUERIES.medium}) {
        padding: 50px 8%;
        position: absolute;
    }
`;

export const OptionsLink = styled(Options)`
    text-decoration: underline;
    letter-spacing: 1px;
`;