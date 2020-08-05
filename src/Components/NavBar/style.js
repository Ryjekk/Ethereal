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
    margin-right: 5px;
    margin-top: -10px;
    
    @media (${QUERIES.medium}) {
        margin-right: 10px;
        margin-top: -5px;
    }
`;

export const NavBotL = styled.div`
    position: fixed;
    bottom: ${PADDING.medium};
    left: ${PADDING.medium};
    transform: rotate(-90deg);
    margin-left: -10px;
    margin-bottom: 25px;
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
    cursor: pointer;
    
    @media (${QUERIES.medium}) {
        font-size: 18px;
    }
`;

export const LinkList = styled.ul`
    list-style: none;
    padding: 0 0 0 30px;

`;

export const LinkOptions = styled(Options)`
    margin-top: -10px;
    padding-bottom: 0px;
`;