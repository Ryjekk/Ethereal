import styled from "styled-components";
import { FooterHeading } from "../../FooterContent/style";
import {Paragraph, FONTS, QUERIES} from "../../../Style";

export const FaqWrapper = styled.div`
    @media (${QUERIES.medium}) {
        padding: 0 8%;
    }
`;

export const LeftColumn = styled.div`
    display: none;
    
    @media (${QUERIES.small}) {
        float: left;
        width: 50%; 
        display: block;
    }
`;

export const RightColumn = styled.div`
    display: none;
    
    @media (${QUERIES.small}) {
        float: left;
        width: 50%; 
        display: block;
    }
`;

export const FaqQ = styled(FooterHeading)`
    text-transform: uppercase;
    white-space: pre-wrap;
`;

export const FaqA = styled(Paragraph)`
    font-family: ${FONTS.fontThree};
    white-space: pre-wrap;
`;

export const ColWrapper = styled.div`
    padding-left: 17px;
    padding-right: 17px;
`;

export const FaqButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        
    @media (${QUERIES.small}) {
        display: none;
    }
`;