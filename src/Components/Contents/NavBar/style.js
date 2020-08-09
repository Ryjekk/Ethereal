import styled from 'styled-components';
import { QUERIES } from '../../../Style';

export const PADDING = {
    big: '35px',
    medium: '25px',
    small: '15px'
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
    
    @media (${QUERIES.medium}) {
        right: ${PADDING.big};
        top: ${PADDING.big};
    }
`;

export const NavBotL = styled.div`
    position: fixed;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    left: ${PADDING.medium};
    bottom: 0;
    
    @media (${QUERIES.medium}) {
        left: ${PADDING.big};
        bottom: ${PADDING.small};
    }
`;

export const NavBotR = styled.div`
    position: fixed;
    bottom: ${PADDING.medium};
    right: ${PADDING.medium};
    
    @media (${QUERIES.medium}) {
        right: ${PADDING.big};
        bottom: ${PADDING.big};
    }
`;

export const Logo = styled.img`
    height: 30px;
    
    @media (${QUERIES.medium}) {
        height: 45px;
    }
`;