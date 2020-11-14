import React from "react";
import {BtnRow, GuestFrame, GuestImg, GuestInfo, GuestName, GuestTop} from "./style";
import {OptionsLink, Paragraph} from "../../../../../Style";
import DivBtn from "../../../../UI/DivBtn";
import {Link} from "react-router-dom";
import ImgSlide from "../../../../Contents/ImgSlide";

const GuestBio = props => {
    const {guestImg, guestName, guestParagraph1, guestParagraph2, guestIg, guestGalleryName, guestDates} = props
    return(
        <GuestFrame>
            <GuestName>{guestName} {guestDates}</GuestName>
            <GuestTop>
                <GuestImg src={guestImg} alt="artistImg"/>
                <GuestInfo>
                    <Paragraph>
                        {guestParagraph1}
                    </Paragraph>
                    <Paragraph>
                        {guestParagraph2}
                    </Paragraph>
                    <BtnRow>
                        <DivBtn>
                            <Link to="/booking">
                                <OptionsLink>
                                    Require booking
                                </OptionsLink>
                            </Link>
                        </DivBtn>
                        <DivBtn>
                            <a href={guestIg} target="_blank" rel="noopener noreferrer">
                                <OptionsLink>
                                    Check my IG
                                </OptionsLink>
                            </a>
                        </DivBtn>
                    </BtnRow>
                </GuestInfo>
            </GuestTop>
            <ImgSlide person={guestGalleryName}/>
        </GuestFrame>
    )
}

export default GuestBio;
