import React from "react";
import { Heading } from '../../Style'
import { OverlayWrapper, Paragraph404 } from './style'

// TODO change image DMCA
// TODO add button to go back to homepage
// TODO add footer to page

const NotFoundPage = () => {
    return (
        <OverlayWrapper>
            <Heading>
                Upssss! <br/>
                It looks like we lost your page
            </Heading>
            <Paragraph404>
                We searched high and low but couldn’t find what you’re looking for. <br/>
                Let’s find a better place for you to go.
            </Paragraph404>
        </OverlayWrapper>
    )
}

export default NotFoundPage;