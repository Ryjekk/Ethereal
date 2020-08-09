import styled from "styled-components";
import {FONTS, Paragraph, QUERIES, FaqAnimation} from "../../../../Style";
import { FooterHeading } from "../../../Contents/FooterContent/style";

export const InnerFaq = styled.div`
    margin-right: auto;
    margin-left: auto;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media (${QUERIES.medium}) {
        width: 60%;
    }
`;

export const FaqBox = styled.div`
    display: block
`;

export const FaqHeading = styled(FooterHeading)`
    font-size: 40px;
    padding: 0;
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
    font-family: ${FONTS.fontThree};
    animation: ${FaqAnimation} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
