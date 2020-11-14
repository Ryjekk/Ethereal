import styled from 'styled-components'
import {MediumHeading, QUERIES} from "../../../../../Style";

export const GuestFrame = styled.div`
    margin: 25px 10px;
      
    @media (${QUERIES.medium}) {
        margin: 40px auto;
        width: 85%;
    }
`;

export const GuestTop = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      
      @media (${QUERIES.medium}) {
        flex-direction: row;
      }
`;

export const GuestImg = styled.img`
    align-self: center;
    max-width: 350px;
    filter: grayscale(60%);
`;

export const BtnRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  
  @media (${QUERIES.medium}) {
    flex-direction: row;
    text-align: start;
  }
`;

export const GuestInfo = styled.div`
  @media (${QUERIES.medium}) {
     padding-left: 30px;
  }
`;

export const GuestName = styled(MediumHeading)`
  text-align: center;
  background-color: rgba(12, 12, 12, .7);
  padding: 50px 40px;
`;
