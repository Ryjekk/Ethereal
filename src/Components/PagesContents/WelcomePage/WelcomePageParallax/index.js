import React from 'react';
//Style
import {WelcomeBox, WelcomeCont, WelcomeHeading, WelcomeParagraph, WelcomeDivBtn} from './style';
import {Link} from "react-router-dom";
import {OptionsLink} from "../../../../Style";

function WelcomePageParallax() {
    return (
        <WelcomeCont>
            <WelcomeBox>
                <WelcomeHeading>Hello</WelcomeHeading>
                <WelcomeParagraph>
                    We are Ethereal Tattoo, based in cold Iceland
                    <br/>
                    Drop between 10am-5pm by Laugavegur 105
                    <br/>
                    Thank you for visiting our website
                </WelcomeParagraph>
                <WelcomeDivBtn>
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