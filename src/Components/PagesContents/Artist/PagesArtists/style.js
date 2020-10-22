import styled from "styled-components";
import {QUERIES, BtnWrapper} from "../../../../Style";

export const ArtBtnWrap = styled(BtnWrapper)`
    margin-bottom: -20px;
    display: flex;
    flex-direction: column;
    
    @media(${QUERIES.medium}) {
        margin-bottom: -70px;
        flex-direction: row;
    }
`;

export const Separator = styled.div`
    margin: 0px 20px;
`
