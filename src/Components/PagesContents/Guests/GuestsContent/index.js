import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {GuestBox, GuestWrap, GuestImage, GuestTextBox} from "./style"
import {ArtistButtonWrapper} from "../../Artist/style";
import {OptionsLink} from "../../../../Style";

const GuestsContent = ({guestPageData}) => {
    return (
        <GuestWrap>
            {guestPageData.map((el) => (
                <GuestBox>
                    <GuestImage src={`${process.env.REACT_APP_BACKEND_URL}${el.guestImg[0].url}`}/>
                    <GuestTextBox>
                        <ArtistButtonWrapper>
                            <DivBtn>
                                <Link to='/guests'>
                                    <OptionsLink>
                                        {el.guestName}
                                    </OptionsLink>
                                </Link>
                            </DivBtn>
                        </ArtistButtonWrapper>
                    </GuestTextBox>
                </GuestBox>
            ))}
        </GuestWrap>
    )
}

export default GuestsContent;
