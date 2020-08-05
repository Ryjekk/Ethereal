import styled from "styled-components";
import {QUERIES} from "../../../Style";
import {NavTopR} from "../style";


export const LinkList = styled(NavTopR)`
    right: 35px;
    top: 60px;

    @media (${QUERIES.medium}) {
       right: 40px;
       top: 65px;
    }
`;
