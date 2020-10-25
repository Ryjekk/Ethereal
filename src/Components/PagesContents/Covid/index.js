import React from "react";
import {
    WelcomeBox,
    WelcomeCont,
    WelcomeHeading
} from "../WelcomePage/WelcomePageParallax/style";

import { WelcomeParagraph, WelcomeParagraphSmall } from "./style";

const CovidPage = () => {
    return (
        <WelcomeCont>
            <WelcomeBox>
                {/*TODO DO IT BETTER*/}
                <WelcomeHeading>COVID-19 UPDATE</WelcomeHeading>
                <WelcomeParagraph>
                    Due to COVID-19, we ask that all of our clients will follow the rules:
                    <br/><br/>
                    -> Be on time for your appointment. Not earlier, not later.
                    <br/>
                    -> Wash your hands thoroughly and use sanitizer upon arrival.
                    <br/>
                    -> Medical mask must be on at all times.
                    <br/>
                    -> No tattoos that require mask removal.
                    <br/>
                    -> Moral support not be accommodated, no groups.
                    <br/>
                    -> If you are feeling ill or feel any illness symptoms, possibly had contact with person with covid, please reschedule your appointment as soon as possible.
                    <br/>
                    -> For more questions please call as at (+354) 793 2134 or send us email: aura.reykjavik@gmail.com
                </WelcomeParagraph>
                <WelcomeParagraphSmall>
                    Due to COVID-19, we ask that all of our clients will follow the rules:
                    <br/><br/>
                    -> Be on time for your appointment. Not earlier, not later.
                    <br/>
                    -> Wash your hands thoroughly and use sanitizer upon arrival.
                    <br/>
                    -> Medical mask must be on at all times.
                    <br/>
                    -> No tattoos that require mask removal.
                    <br/>
                    -> Moral support not be accommodated, no groups.
                    <br/>
                    -> If you are feeling ill or feel any illness symptoms, possibly had contact with person with covid, please reschedule your appointment as soon as possible.
                </WelcomeParagraphSmall>
            </WelcomeBox>
        </WelcomeCont>
    )
}

export default CovidPage;
