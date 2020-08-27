import styled from "styled-components";
import { QUERIES, FONTS } from "../../../Style";

export const InnerWrapper = styled.footer`    
    @media (${QUERIES.medium}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Social = styled.div`
    display: flex;
    @media (${QUERIES.medium}) {
        justify-content: space-around;
    }
`;

export const SocialLink = styled.a`
    margin-right: 10px;
    margin-bottom: 100px;

    svg {
        width: 25px;
        height: 25px;
    }
`;