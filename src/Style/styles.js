import styled, { keyframes } from 'styled-components';

// Main
// TODO Add queries for laptop L
// TODO Add universal margin
export const QUERIES = {
    medium: `min-width: 1092px`,
    // small: `min-width: 552px`,
    small: `min-width: 689px`,
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
    fontTwo: 'Libre Baskerville',
    // fontTwo: 'bebas-neue-by-fontfabric',
    fontThree: 'droid-sans-mono'
};

// Text
export const Heading = styled.div`
    font-family: ${FONTS.fontTwo};
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

export const MediumHeading = styled.h3`
    font-family: ${FONTS.fontTwo};
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 5px;
`;

export const SmallHeading = styled.h2`
    font-size: 18px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.1em;
`;

export const Paragraph = styled.p`
    font-size: 12px;
    color: ${COLORS.darkGray};
    line-height: 190%;
    letter-spacing: 0.05em;
    // padding-right: 10px;
    font-family: ${FONTS.fontThree};
    white-space: pre-wrap;

    @media (${QUERIES.medium}) {
        font-size: 14px;
        margin-top: 10px;
        // padding-right: 30px;
    }
`;

// Boxes
export const Container = styled.div`
    height: 100vh;
    z-index: 3;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 13%;

    @media (${QUERIES.medium}) {
        padding: 100px 8%;
    }
`;

export const BottomBox = styled(Inner)`
    width: 100%;
    bottom: 0;
    background-color: ${COLORS.bgBlack};
    opacity: .7;
    
    @media (${QUERIES.medium}) {
        padding: 50px 8%;
        // position: absolute;
    }
`;

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ParallaxBox = styled(CenterBox)`
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

export const BtnWrapper = styled(CenterBox)`
    margin: 35px 0;
`;

// Links
export const Options = styled.div`
    text-transform: uppercase;
    color: ${COLORS.gray};
    cursor: pointer;
    
    @media (${QUERIES.medium}) {
        font-size: 18px;
    }
`;

export const OptionsLink = styled(Options)`
    text-decoration: underline;
    letter-spacing: 1px;
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

export const FaqAnimation = keyframes`
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: .1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;
