import styled from "styled-components";
import { QUERIES, FONTS, Paragraph } from "../../Style";

export const InnerWrapper = styled.footer`
    // max-width: 70%;
    // margin: 0 auto;
    
    @media (${QUERIES.medium}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const ContentCol = styled.div`
//optional
    // text-align: center;
`;

export const FooterHeading = styled.h3`
    font-family: ${FONTS.fontTwo};
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 5px;
`;

export const ParagraphFoot = styled(Paragraph)`
    font-family: ${FONTS.fontThree}
`;

export const Social = styled.div`
    display: flex;
    @media (${QUERIES.medium}) {
        justify-content: space-around;
    }
`;

export const SocialLink = styled.a`
    margin-right: 10px;
    margin-bottom: 100px;

    svg {
        width: 25px;
        height: 25px;
    }
`;