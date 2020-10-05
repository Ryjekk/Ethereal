import React from "react";
import {OverlayWrapper, Paragraph404} from "../NotFoundPage/style";
import {Heading, MediumHeading} from "../../../Style";

const ComingSoon = () => {
    return (
        <OverlayWrapper>
            <Heading>
                Aura Reykjavik <br/>
                Comming Soon...
            </Heading>
            <Paragraph404>
                No worries! you can visit us on Borgatun 28, 105 Reykjavik.<br/>
                Also you are more than welcome to <MediumHeading>
                <a href="https://www.instagram.com/aura.reykjavik/">slide into our DM's </a>
            </MediumHeading>
            </Paragraph404>
        </OverlayWrapper>
    )
}

export default ComingSoon;
