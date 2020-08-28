import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {ArtistBox, ArtistImage, ArtistWrap, ArtistButtonWrapper} from "./style";
import {Paragraph, MediumHeading, OptionsLink} from "../../../../Style";
// Assets
import {ArtistData} from "../../../../Data/artistData";

const ArtistContent = () => {

    return (
        <ArtistWrap>
            {ArtistData.map((el) => (
                <ArtistBox>
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
                </ArtistBox>
            ))}
        </ArtistWrap>
    )
}

export default ArtistContent;