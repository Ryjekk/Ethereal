import styled from "styled-components";
import {QUERIES} from "../../../../../Style";

export const GuestTextBox = styled.div`
      background-color: rgba(12, 12, 12, .7);
      overflow-wrap: break-word;
      margin: 25px 10px;
      padding: 50px 40px;
    //
    @media (${QUERIES.medium}) {
        margin: 0 auto;
        width: 70%;
    }
`;
