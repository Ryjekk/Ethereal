import React from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../../UI/DivBtn";
// Style
import {ArtistBox, ArtistImage, ArtistWrap, ArtistButtonWrapper} from "../style";
import {Paragraph, MediumHeading, OptionsLink} from "../../../../Style";
// GQL
import { useQuery } from "@apollo/react-hooks";
import TEAM_QUERY from "../../../../queries/teamQuery";

const ArtistContent = () => {
    const {data, loading, error} = useQuery(TEAM_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const {mainArtistsData} = data;
    console.log(data)
    return (
        <ArtistWrap>
            {/*TODO link remove*/}
            {mainArtistsData.map((el) => (
                <ArtistBox>
                    <ArtistImage src={`http://localhost:1337${el.ima[0].url}`}/>
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
