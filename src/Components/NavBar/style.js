import styled from 'styled-components';
import { QUERIES, COLORS } from '../../Style';

export const PADDING = {
    medium: '25px'
};

export const Navigation = styled.nav`
    position: fixed;
    height: 100vh;
    z-index: 30;
    
    a {
        text-decoration: none;
        align-items: center;
        text-transform: uppercase;
    }
`;

export const NavTopL = styled.div`
    position: fixed;
    top: ${PADDING.medium};
    left: ${PADDING.medium};
`;

export const NavTopR = styled.div`
    position: fixed;
    top: ${PADDING.medium};
    right: ${PADDING.medium};
    transform: rotate(90deg);
    margin-right: -10px;
    margin-top: 30px;
    
    @media (${QUERIES.medium}) {
        margin-left: 0px;
    }

`;

export const NavBotL = styled.div`
    position: fixed;
    bottom: ${PADDING.medium};
    left: ${PADDING.medium};
    transform: rotate(-90deg);
    margin-bottom: -30px;
    margin-bottom: 30px;
    
    @media (${QUERIES.medium}) {
        margin-left: 0px;
    }
`;

export const NavBotR = styled.div`
    position: fixed;
    bottom: ${PADDING.medium};
    right: ${PADDING.medium};
    margin-right: 20px;
    
    @media (${QUERIES.medium}) {
        margin-left: 0px;
    }
`;

export const Logo = styled.img`
    height: 30px;
    
    @media (${QUERIES.medium}) {
        height: 45px;
    }
`;

export const Options = styled.p`
    color: ${COLORS.gray};
    
    @media (${QUERIES.medium}) {
        font-size: 18px;
    }
`;