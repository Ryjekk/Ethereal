import React from "react";
import {ArtistWrapper, ArtistWelcome} from "../../../Contents/DivideComponent/style";
import {Paragraph, OptionsLink} from "../../../../Style";
import {FaqButtonWrapper} from "../FaqContent/style";
import DivBtn from "../../../UI/DivBtn";
import {Link} from "react-router-dom";

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