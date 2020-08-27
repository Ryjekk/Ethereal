import React from "react";
import {ArtistBox, ArtistImage, ArtistWrap, ArtistButtonWrapper} from "./style";
import {Paragraph, MediumHeading} from "../../../../Style";
import DivBtn from "../../../UI/DivBtn";
import {Link} from "react-router-dom";
import {OptionsLink} from "../../NotFoundPage/style";

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