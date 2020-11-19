import styled from "styled-components";
import { QUERIES } from "../../../Style";

export const InnerWrapper = styled.footer`    
    @media (${QUERIES.medium}) {
        display: flex;
        justify-content: space-between;
    }
`;
