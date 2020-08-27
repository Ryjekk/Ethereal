import React from "react";
import {FooterHeading} from "../FooterContent/style";
import {ArtistBox, ArtistImage, ArtistWrap, ArtistButtonWrapper} from "./style";
import {Paragraph} from "../../../Style";
import DivBtn from "../../UI/DivBtn";
import {Link} from "react-router-dom";
import {OptionsLink} from "../../PagesContents/NotFoundPage/style";

import ProfileImg from '../../../Assets/Profile/profile1.jpg'
import ProfileImgSoon from '../../../Assets/Profile/profile4.jpg'

const ArtistContent = () => {

    return (
        <ArtistWrap>
            <ArtistBox>
                <ArtistImage src={ProfileImg}/>
                <FooterHeading>
                    Anna
                </FooterHeading>
                <ArtistButtonWrapper>
                    <DivBtn>
                        <Link to='/artist'>
                            <OptionsLink>
                                View Gallery
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </ArtistButtonWrapper>
                    <Paragraph>
                        Specializes in single needle and fine line.
                    </Paragraph>
                    <Paragraph>
                        She started her career as a tattoo artist in Poland. With a following that is inspired by her designs, the passion she started with still holds true. She says, “It’s hard work, a lot of focus and a lot of trial and error. When I decided to grab a machine for the first time, I never wanted to stop.”
                    </Paragraph>
            </ArtistBox>

            <ArtistBox>
                <ArtistImage src={ProfileImgSoon}/>
                <FooterHeading>
                    Coming Soon...
                </FooterHeading>
                <ArtistButtonWrapper>
                    <DivBtn>
                        <Link to='/booking'>
                            <OptionsLink>
                                Contact
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </ArtistButtonWrapper>
                <Paragraph>
                    Are You Looking for working experience?
                </Paragraph>
                <Paragraph>
                    Don't hesitate and slide into our DM's
                </Paragraph>
            </ArtistBox>
        </ArtistWrap>
    )
}

export default ArtistContent;