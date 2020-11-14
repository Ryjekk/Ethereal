import styled from "styled-components";
import {QUERIES} from "../../../../Style";

export const GuestBox = styled.div`
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    
    @media (${QUERIES.small}) {
        // TODO change for more pictures
        width: 25%;
        max-width: 50%;
        padding: 0 17px;
   }
`;
