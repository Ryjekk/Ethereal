import React from 'react';
//Style
import {WelcomeBox, WelcomeCont, WelcomeHeading, WelcomeParagraph} from './style';
import {Link} from "react-router-dom";
import {OptionsLink} from "../../PagesContents/NotFoundPage/style";
import DivBtn from "../../UI/DivBtn";

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
                <DivBtn>
                    <Link to='/booking'>
                        <OptionsLink>
                            Book Appointment
                        </OptionsLink>
                    </Link>
                </DivBtn>
            </WelcomeBox>
        </WelcomeCont>
    );
}

export default WelcomePageParallax;