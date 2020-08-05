import styled from 'styled-components';

// Main
// TODO Add queries for laptop L
export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    lightGray: '#9E9E9E',
    gray: '#f9f8f8'
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
    color: ${COLORS.lightGray};
    line-height: 190%;
    letter-spacing: 0.05em;
    // padding-right: 10px;

    @media (${QUERIES.medium}) {
        font-size: 13px;
        // padding-right: 30px;
    }
`;

export const Container = styled.div`
    height: 100vh;
    background-color: #121212;
    opacity: 1;
    z-index: 3;
`;
