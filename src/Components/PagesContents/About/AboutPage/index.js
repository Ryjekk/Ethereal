import React from "react";
// Style
import {InnerRow, AboutImg, AboutBox, AboutHeading} from './style';
import {Paragraph} from "../../../../Style";
// Assets
import {AboutData} from "../../../../Data/aboutData";

const AboutPage = () => {
    return (
        <InnerRow>
            <AboutImg />
            <AboutBox>
                {AboutData.map((el) =>
                    <>
                    <AboutHeading>
                        {el.heading}
                    </AboutHeading>
                    <Paragraph style={{marginBottom: "34px"}}>
                        {el.paragraph_one}
                    </Paragraph>
                    </>
                )}
            </AboutBox>
        </InnerRow>
    )
}

export default AboutPage;