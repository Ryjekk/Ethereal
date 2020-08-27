import styled from "styled-components";
import { COLORS, FONTS } from "../../../Style";

export const Btn = styled.div`
    margin: 10px 0;
    border: 2px solid ${COLORS.gray};
    cursor: pointer;
    font-family: ${FONTS.fontThree};
    
    * {
        //targeting link
        *{
            //targeting text
            padding: 13px 26px;
        }
    }
    
    :hover {
        background-color: ${COLORS.gray};
        transition: 0.1s background-color linear, 0.1s color linear;
        
        * { 
            color:${COLORS.bgBlack};
        }
    }
`;