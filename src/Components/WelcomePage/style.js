import styled from 'styled-components';
import { QUERIES, ColorSlide, TrackBallSlide, NudgeMouse } from "../../Style";

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

export const Scroller = styled.div`
    background: #121212 linear-gradient(transparent 0%, transparent 50%, #f9f8f8 50%, #f9f8f8 100%);
    position: absolute;
    bottom: 0;
    margin-bottom: 45px;
    width: 32px;
    height: 53px;
    border-radius: 100px;
    background-size: 100% 200%;
    animation: ${ColorSlide} 7s linear infinite, ${NudgeMouse} 7s ease-out infinite;
    
    &::before, ::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    
    &::before{
        width: 26px;
        height: 47px;
        background-color: #121212;
        border-radius: 100px;
    }
    
    &::after {
        background-color: #f9f8f8;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        animation: ${TrackBallSlide} 7s linear infinite;
    }
`;