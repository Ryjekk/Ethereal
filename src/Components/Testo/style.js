import styled from 'styled-components';
import { QUERIES } from '../../Style';
import { SmallHeading } from '../../Style';

export const GuidesCont = styled.div`
    background-color: black;
    width: 100vw;
    padding: 100px 0 50px 0;
   
    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const SmallHeadingGuides = styled(SmallHeading)`
    color: white;
    margin: 0 30px 50px 30px;

    @media (${QUERIES.medium}) {
        margin: 0 auto 100px auto;
    }
`;

