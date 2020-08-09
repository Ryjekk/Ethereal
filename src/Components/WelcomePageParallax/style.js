import styled from 'styled-components';
import {COLORS, QUERIES, SmallHeading} from '../../Style';

import bg from '../../Assets/skullPink.jpg'
// TODO if you want paralax

export const WelcomeCont = styled.div`
    background-color: ${COLORS.black};
    width: 100vw;
    height: 100vh;
    padding: 100px 0 50px 0;
    
    // TODO if you want paralax
    // background-image: url(${bg});
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
   
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

