import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    lightGray: '#9E9E9E',
    gray: '#f9f8f8'
};

export const Container = styled.div`
    height: 100vh;
    background-color: #121212;
    opacity: 1;
    z-index: 3;
`;


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
    padding-right: 10px;

    @media (${QUERIES.medium}) {
        font-size: 13px;
        padding-right: 30px;
    }
`;

// check
export const Inner = styled.div`
    max-width: ${QUERIES.maxWidth};
    width: 100vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InnerLanding = styled(Inner)`
    z-index: 5;
    // margin-bottom: 670px;
    // position: relative;
`;

export const Spacing = styled.div`
    display: flex;
    margin: 0px auto 0 auto;
`;

// delete
export const FixedSpacing = styled(Spacing)`
    width: 100vw;
    // position: fixed;
    // z-index: -99;
    bottom: 0;
    
`;