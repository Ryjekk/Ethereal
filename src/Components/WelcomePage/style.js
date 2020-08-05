import styled from 'styled-components';
import { QUERIES, Paragraph } from "../../Style";

export const VideoEl = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: grayscale(70%);
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const WelcomeText = styled.div`
    font-family: 'bebas-neue-by-fontfabric';
    font-size: 45px;
    width: 100%;
    line-height: 149%;
    align-items: center;
    text-align: center;
    position: relative;
    letter-spacing: 0.1em;

    @media (${QUERIES.medium}) {
        font-size: 72px;
        letter-spacing: .4em;
    }
`;