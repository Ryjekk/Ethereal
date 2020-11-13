import styled from 'styled-components'
import {ParallaxBox, QUERIES} from "../../../../Style";
import bg from '../../../../Assets/Backgrounds/bg3.jpg'

export const JoinCont = styled(ParallaxBox)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
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
     height: 100%;
     width: 100%;
     padding: 50px 40px;
    
    @media (${QUERIES.medium}) {
        width: 40%;
    }
`;

