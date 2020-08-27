import styled from 'styled-components';
import { QUERIES, COLORS, ColorSlide, TrackBallSlide, NudgeMouse } from "../../../Style";

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


export const Scroller = styled.div`
    background: ${COLORS.bgBlack} linear-gradient(transparent 0%, transparent 50%, ${COLORS.gray} 50%, ${COLORS.gray} 100%);
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
        background-color: ${COLORS.bgBlack};
        border-radius: 100px;
    }
    
    &::after {
        background-color: ${COLORS.gray};
        width: 5px;
        height: 5px;
        border-radius: 100%;
        animation: ${TrackBallSlide} 7s linear infinite;
    }
`;