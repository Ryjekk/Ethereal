import styled from "styled-components";
import {Paragraph} from "../../../Style";

export const WelcomeParagraph = styled(Paragraph)`
    padding: 0 40px;
    display: none;
    @media (min-width: 1300px) {
        margin: 0 40px;
        display: block;
    }
`;

export const WelcomeParagraphSmall = styled(Paragraph)`
    padding: 0 10px;
    
    @media (min-width: 1300px) {
        margin-top: 30px;
        display: none;
    }
`;
