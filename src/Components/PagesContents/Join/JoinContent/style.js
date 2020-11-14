import styled from 'styled-components'
import {ParallaxBox, QUERIES} from "../../../../Style";
import bg from '../../../../Assets/Backgrounds/b5.jpg'

export const JoinCont = styled(ParallaxBox)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    min-height: 100vh;
    padding: 100px 0 50px 0;
    background-image: url(${bg});
    
    @media (${QUERIES.medium}) {
        padding: 100px 0;
        flex-direction: row;
    }
`;

export const JoinBox = styled.div`
     background-color: rgba(12, 12, 12, .7);
     margin: 25px 10px;
     padding: 50px 40px;
    
    @media (${QUERIES.medium}) {
        width: 40%;
    }
`;

