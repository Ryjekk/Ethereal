import styled from 'styled-components';
import { QUERIES, SmallHeading } from '../../Style';

export const WelcomeCont = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    padding: 100px 0 50px 0;
   
    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const PlAcEhOlDeR = styled(SmallHeading)`
    color: white;
    margin: 0 30px 50px 30px;

    @media (${QUERIES.medium}) {
        margin: 0 auto 100px auto;
    }
`;

