import styled from "styled-components";
import {COLORS, FONTS} from "../../../Style";


export const Btn = styled.div`
    border: 1px solid ${COLORS.gray};
    cursor: pointer;
    font-family: ${FONTS.fontThree};
    padding: 13px 26px;
`;


// TODO delete this
// you define it like this here
// color: ${props => props.theme.main};

// than in componenet you place style
// and wrap them in
// <ThemeProvider theme={theme}>
// const theme = {
//     main: "mediumseagreen"
// };