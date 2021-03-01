import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {ArtistBox, ArtistImage, ArtistWrap, ArtistButtonWrapper} from "../style";
import {Paragraph, MediumHeading, OptionsLink} from "../../../../Style";

const ArtistContent = ({mainArtistsData}) => {
    return (
        <ArtistWrap>
            {mainArtistsData.map((el) => (
                <ArtistBox>
                    <ArtistImage src={`${el.ima[0].url}`}/>
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
                </ArtistBox>
            ))}
        </ArtistWrap>
    )
}

export default ArtistContent;
