import styled from "styled-components";
import {QUERIES} from "../../../../Style";

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
