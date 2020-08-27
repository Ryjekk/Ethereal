import React from "react";
import { InnerRow, AboutImg, AboutBox, AboutHeading } from './style';
import {Paragraph} from "../../../../Style";

const AboutPage = () => {
    return (
        <InnerRow>
            <AboutImg />
            <AboutBox>
                <AboutHeading>
                    About Ethereal Tattoo
                </AboutHeading>
                <Paragraph>
                    Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures. Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.
                </Paragraph>
                <AboutHeading style={{marginTop: "34px"}}>
                    Our Mission
                </AboutHeading>
                <Paragraph>
                    Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.Ethereal Tattoo was established in 2017 in Reykjavik. We are small, but very open society. We are strongly inspired by Icelandic nature, Elfs and amazing small creatures.
                </Paragraph>
            </AboutBox>
        </InnerRow>
    )
}

export default AboutPage;