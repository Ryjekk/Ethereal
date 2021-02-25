import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {GuestBox, GuestWrap, GuestImage, GuestTextBox} from "./style"
import {ArtistButtonWrapper} from "../../Artist/style";
import {OptionsLink} from "../../../../Style";
// GQL
import { useQuery } from "@apollo/react-hooks";
import GUEST_QUERY from "../../../../queries/guestQuery";

const GuestsContent = () => {
    const {data, loading, error} = useQuery(GUEST_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const {guestPageData} = data

    return (
        <GuestWrap>
            {guestPageData.map((el) => (
                <GuestBox>
                    {/*todo channge this string*/}
                    <GuestImage src={`http://localhost:1337${el.guestImg[0].url}`}/>
                    <GuestTextBox>
                        {/*<MediumHeading>*/}
                        {/*    {el.heading}*/}
                        {/*</MediumHeading>*/}
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
