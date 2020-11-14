import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {GuestBox} from "./style"
import {ArtistImage, ArtistWrap, ArtistButtonWrapper} from "../../Artist/style";
import {Paragraph, MediumHeading, OptionsLink} from "../../../../Style";
// Assets
import {GuestData} from '../../../../Data/guestsData'

const GuestsContent = () => {

    return (
        <ArtistWrap>
            {GuestData.map((el) => (
                <GuestBox>
                    <ArtistImage src={el.ima}/>
                    <MediumHeading>
                        {el.heading}
                    </MediumHeading>
                    <ArtistButtonWrapper>
                        <DivBtn>
                            <Link to={el.btn_link}>
                                <OptionsLink>
                                    {el.btn_text}
                                </OptionsLink>
                            </Link>
                        </DivBtn>
                    </ArtistButtonWrapper>
                    <Paragraph>
                        {el.paragraph_one}
                    </Paragraph>
                    <Paragraph>
                        {el.paragraph_two}
                    </Paragraph>
                    <Paragraph>
                        {el.paragraph_three}
                    </Paragraph>
                </GuestBox>
            ))}
        </ArtistWrap>
    )
}

export default GuestsContent;
