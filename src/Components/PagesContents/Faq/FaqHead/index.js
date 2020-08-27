import React from "react";
import {ArtistWrapper, ArtistWelcome} from "../../Artist/ArtistHead/style";
import {Paragraph} from "../../../../Style";
import {FaqButtonWrapper} from "../FaqContent/style";
import DivBtn from "../../../UI/DivBtn";
import {Link} from "react-router-dom";
import {OptionsLink} from "../../NotFoundPage/style";

const FaqHead = () => {
    return(
        <ArtistWrapper>
            <ArtistWelcome>FAQ</ArtistWelcome>
            <Paragraph>Frequently Asked Questions</Paragraph>
            <FaqButtonWrapper>
                <DivBtn>
                    <Link to='/faq'>
                        <OptionsLink>
                            FAQ
                        </OptionsLink>
                    </Link>
                </DivBtn>
            </FaqButtonWrapper>
        </ArtistWrapper>
    )
}

export default FaqHead;