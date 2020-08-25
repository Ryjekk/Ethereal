import React from "react";
import { InnerRow, AboutImg, AboutBox, AboutHeading, AboutParagraph } from './style';

const AboutPage = () => {
    return (
        <InnerRow>
            <AboutImg />
            <AboutBox>
                <AboutHeading>
                    About Ethereal Tattoo
                </AboutHeading>
                <AboutParagraph>
                    Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures. Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.
                </AboutParagraph>
                <AboutHeading style={{marginTop: "34px"}}>
                    Our Mission
                </AboutHeading>
                <AboutParagraph>
                    Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.
                </AboutParagraph>
            </AboutBox>
        </InnerRow>
    )
}

export default AboutPage;