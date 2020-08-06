import styled, { keyframes } from 'styled-components';

// Main
// TODO Add queries for laptop L
export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    gray: '#f9f8f8',
    darkGray: '#9E9E9E',
    darkestGray: '#4e5559',
    black: '#000000',
    bgBlack: "#121212"
};

export const FONTS = {
    fontOne: 'Space Mono',
    fontTwo: 'bebas-neue-by-fontfabric',
    fontThree: 'droid-sans-mono'
};

// Text
export const Heading = styled.h1`
    font-size: 30px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
`;

export const SmallHeading = styled.h2`
    font-size: 18px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.1em;

    @media (${QUERIES.medium}) {
        align-items: center;
        text-align: center;
    }
`;

export const Paragraph = styled.p`
    font-size: 10px;
    color: ${COLORS.darkGray};
    line-height: 190%;
    letter-spacing: 0.05em;
    // padding-right: 10px;

    @media (${QUERIES.medium}) {
        font-size: 13px;
        // padding-right: 30px;
    }
`;

// Boxes
export const Container = styled.div`
    height: 100vh;
    z-index: 3;
`;

export const Inner = styled.div`
    padding: 50px 8%;

    @media (${QUERIES.medium}) {
        padding: 100px 8%;
    }
`;

// Links
export const Options = styled.div`
    text-transform: uppercase;
    color: ${COLORS.gray};
    cursor: pointer;
    
    @media (${QUERIES.medium}) {
        font-size: 13px;
    }
`;

//Animations
export const ColorSlide = keyframes`
0% {
        background-position: 0% 100%;
    }
    20% {
        background-position: 0% 0%;
    }
    21% {
        background-color: ${COLORS.darkestGray};
    }
    29.99% {
        background-color: ${COLORS.gray};
        background-position: 0% 0%;
    }
    30% {
        background-color: ${COLORS.darkestGray};
        background-position: 0% 100%;
    }
    50% {
        background-position: 0% 0%;
    }
    51% {
        background-color: ${COLORS.darkestGray};
    }
    59% {
        background-color: ${COLORS.gray};
        background-position: 0% 0%;
    }
    60% {
        background-color: ${COLORS.darkestGray};
        background-position: 0% 100%;
    }
    80% {
        background-position: 0% 0%;
    }
    81% {
        background-color: ${COLORS.darkestGray};
    }
    90%, 100% {
        background-color: ${COLORS.gray};
    }
`;

export const TrackBallSlide = keyframes`
0% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
    6% {
        opacity: 1;
        transform: scale(0.9) translateY(5px);
    }
    14% {
        opacity: 0;
        transform: scale(0.4) translateY(40px);
    }
    15%, 19% {
        opacity: 0;
        transform: scale(0.4) translateY(-20px);
    }
    28%, 29.99% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
    30% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
    36% {
        opacity: 1;
        transform: scale(0.9) translateY(5px);
    }
    44% {
        opacity: 0;
        transform: scale(0.4) translateY(40px);
    }
    45%, 49% {
        opacity: 0;
        transform: scale(0.4) translateY(-10px);
    }
    58%, 59.99% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
    60% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
    66% {
        opacity: 1;
        transform: scale(0.9) translateY(5px);
    }
    74% {
        opacity: 0;
        transform: scale(0.4) translateY(40px);
    }
    75%, 79% {
        opacity: 0;
        transform: scale(0.4) translateY(-10px);
    }
    88%, 100% {
        opacity: 1;
        transform: scale(1) translateY(-10px);
    }
`;

export const NudgeMouse = keyframes`
    0% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(8px);
    }
    30% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
    60% {
        transform: translateY(0);
    }
    80% {
        transform: translateY(8px);
    }
    90% {
        transform: translateY(0);
    }
`;