import styled from "styled-components";
import {FONTS, Paragraph, QUERIES, FaqAnimation, MediumHeading} from "../../../../Style";

export const InnerFaq = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media (${QUERIES.medium}) {
        width: 60%;
    }
`;

export const FaqHeading = styled(MediumHeading)`
    font-size: 40px;
`;

export const Question = styled.h3`
    cursor: pointer;
    font-family: ${FONTS.fontOne};
    font-weight: 400;
    letter-spacing: 2px;
`;

export const Answer = styled(Paragraph)`
    padding-left: 28px;
    display: none;
    animation: ${FaqAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
