import styled from 'styled-components';
import { COLORS, ColorSlide, TrackBallSlide, NudgeMouse, CenterBox } from "../../../Style";
import bg from '../../../Assets/Backgrounds/b2m.jpg'

export const VideoEl = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: grayscale(70%);
`;

export const Overlay = styled(CenterBox)`
    background-image: url(${bg});
    filter: grayscale(30%);
    background-size: contain;
    background-color: #000000;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
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
