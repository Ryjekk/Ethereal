import React from 'react';
//Style
import {WelcomeBox, WelcomeCont, WelcomeHeading, WelcomeParagraph, WelcomeParagraphSmall, WelcomeDivBtn} from './style';
import {Link} from "react-router-dom";
import {OptionsLink} from "../../../../Style";

function WelcomePageParallax() {
    return (
        <WelcomeCont>
            <WelcomeBox>
                <WelcomeHeading>Hello</WelcomeHeading>
                <WelcomeParagraph>
                    Aura is a friendly private tattoo shop located in the heart of Reykjavik.
                    <br/>
                    We believe that getting a tattoo is a unique experience, thats why Aura is a place with relaxing atmosphere where you can get stunning stunning tatoo pieces surrounded by warm and welcoming environment.                     <br/>
                    <br/>
                    We are an APPOINTMENT based studio where we create custom works for our clients.
                    <br/>
                    <br/>
                    However we can occasionally accept walk-ins depending on artist availability. To check availability or to set up an appointment with an artist, please fill up the booking form on our website or call us at: (+354) 793 2134
                </WelcomeParagraph>

                <WelcomeParagraphSmall>
                    Aura is a friendly private tattoo studio located in the heart of  Reykjavik with a very relaxing atmosphere.
                    <br/>
                    We are an APPOINTMENT based studio where we create custom works for our clients.
                    <br/>
                </WelcomeParagraphSmall>
                <WelcomeDivBtn>
                    {/* TODO Fix for small pc*/}
                    <Link to='/booking'>
                        <OptionsLink>
                            Book Appointment
                        </OptionsLink>
                    </Link>
                </WelcomeDivBtn>
            </WelcomeBox>
        </WelcomeCont>
    );
}

export default WelcomePageParallax;
