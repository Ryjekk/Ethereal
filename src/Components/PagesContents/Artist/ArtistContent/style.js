import styled from "styled-components";
import {QUERIES} from "../../../../Style";

export const ArtistWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
   @media (${QUERIES.small}) {
        padding: 0 8%;
        flex-direction: row;
   }
`;

export const ArtistBox = styled.div`
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    
    @media (${QUERIES.small}) {
        max-width: 50%;
        padding: 0 17px;
   }
`;

export const ArtistImage = styled.img`
    align-self: center;
    width: 100%;
    filter: grayscale(60%);
    
    @media (${QUERIES.medium}) {
        width: 80%;
   }
 `;

export const ArtistButtonWrapper = styled.div`
    display: flex;
    text-align: center;
`;