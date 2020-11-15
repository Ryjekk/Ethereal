import styled from "styled-components";
import {QUERIES} from "../../../../Style";

export const GuestBox = styled.div`
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    flex: 0 0 33.3333%;
    margin-bottom: 20px;   

    @media (${QUERIES.small}) {
        padding: 0 17px;
        margin-bottom: 50px;
   }
`;

export const GuestWrap = styled.div`
    margin-top: 50px;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    display: none;
   @media (${QUERIES.small}) {
        padding: 0 8%;
        display: flex;
        flex-direction: row;
   }
`;

export const GuestImage = styled.img`
    align-self: center;
    filter: grayscale(60%);
    //width: 70%;
    
    @media (${QUERIES.medium}) {
      width: 60%;  
   }
 `;

export const GuestTextBox = styled.div` 
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// TODO CHANGE BUTTON FOR SMALL DEVOCES
