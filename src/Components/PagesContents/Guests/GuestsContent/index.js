import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {GuestBox, GuestWrap, GuestImage, GuestTextBox} from "./style"
import {ArtistButtonWrapper} from "../../Artist/style";
import {OptionsLink} from "../../../../Style";
// Assets
import {GuestData} from '../../../../Data/guestsData'

const GuestsContent = () => {

    return (
        <GuestWrap>
            {GuestData.map((el) => (
                <GuestBox>
                    <GuestImage src={el.ima}/>
                    <GuestTextBox>
                        {/*<MediumHeading>*/}
                        {/*    {el.heading}*/}
                        {/*</MediumHeading>*/}
                        <ArtistButtonWrapper>
                            <DivBtn>
                                <Link to={el.btn_link}>
                                    <OptionsLink>
                                        {el.btn_text}
                                    </OptionsLink>
                                </Link>
                            </DivBtn>
                        </ArtistButtonWrapper>
                    </GuestTextBox>
                    {/*<Paragraph>*/}
                    {/*    {el.paragraph_one}*/}
                    {/*</Paragraph>*/}
                    {/*<Paragraph>*/}
                    {/*    {el.paragraph_two}*/}
                    {/*</Paragraph>*/}
                    {/*<Paragraph>*/}
                    {/*    {el.paragraph_three}*/}
                    {/*</Paragraph>*/}
                </GuestBox>
            ))}
        </GuestWrap>
    )
}

export default GuestsContent;
