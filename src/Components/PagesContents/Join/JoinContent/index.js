import React from "react";
import {JoinBox, JoinCont} from "./style";
import {MediumHeading, Paragraph} from "../../../../Style";

const Join = () => {
    return (
        <JoinCont>
            <JoinBox>
                <MediumHeading>Do you want to join our team?</MediumHeading>
                    <Paragraph>
                        We are always looking to expand  our team with new artists.
                    </Paragraph>
                    <Paragraph>
                        If you are interested in working at our studio please email us at:
                        auraartistswanted@gmail.com
                    </Paragraph>
            </JoinBox>
            <JoinBox>
                <MediumHeading>Do you want to be our Guest?</MediumHeading>
                <Paragraph>
                    Aura Tattoo Reykjavik has a friendly and helpful staff and we are always happy to accommodate guest artists. We will promote your stay and do our best to keep you as busy as you would like to be while you are here.
                </Paragraph>
                <Paragraph>
                    If you are interested in doing a guest spot, drop us an email* with inquiry to
                    auraartistswanted@gmail.com and we will get back to you!
                </Paragraph>
                <hr/>
                <Paragraph>
                    *In the email include such information as:
                    <ul>
                        <li>Your name</li>
                        <li>Current studio</li>
                        <li>Your social media</li>
                        <li>Desired date of visit</li>
                        <li>Why would you like to guest spot at Aura</li>
                        <li>Do you already have clients in Iceland / Have you been to Iceland before</li>
                        <li>Tell us a bit about yourself (tattoo style, artistic background, guest experience etc.)</li>
                    </ul>
                </Paragraph>
            </JoinBox>
        </JoinCont>
    )
}

export default Join;
