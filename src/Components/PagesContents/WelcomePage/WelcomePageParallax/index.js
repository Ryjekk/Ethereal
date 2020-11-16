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
                    Aura is a friendly private tattoo studio located in the heart of  Reykjavik with a very relaxing atmosphere.
                    <br/>
                    We do believe that getting a tattoo is not only getting a piece of art but also a unique experience. AURA is for the people and the priority of the studio is creating stunning tattoos in warm, welcoming environment.
                    <br/>
                    <br/>
                    We are an APPOINTMENT  based studio. Creating custom work and taking our time, and putting in effort to make the best possible tattoo for your enjoyment.
                    <br/>
                    <br/>
                    However we can occasionally accept walk-ins depending on artist availability. To check availability or to set up an appointment with an artist, please fill up the booking form on our website or call us at: (+354) 793 2134
                </WelcomeParagraph>

                <WelcomeParagraphSmall>
                    Aura is a friendly private tattoo studio located in the heart of  Reykjavik with a very relaxing atmosphere.
                    <br/>
                    We are an APPOINTMENT based studio. Creating custom work and taking our time, and putting in effort to make the best possible tattoo for your enjoyment.
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
