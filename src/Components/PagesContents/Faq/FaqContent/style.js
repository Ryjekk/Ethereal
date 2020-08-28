import styled from "styled-components";
import {BtnWrapper, QUERIES} from "../../../../Style";

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

export const ColWrapper = styled.div`
    padding-left: 17px;
    padding-right: 17px;
`;

export const FaqButtonWrapper = styled(BtnWrapper)`
    margin: 0;
    @media (${QUERIES.small}) {
        display: none;
    }
`;