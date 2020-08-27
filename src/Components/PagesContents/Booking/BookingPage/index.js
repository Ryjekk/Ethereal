import React from "react";
import {Link} from "react-router-dom";
import {Inner} from "../../../../Style";
import {OptionsLink} from "../../NotFoundPage/style";
import {BtnWrapper, TextBox} from "./style";
import BookingForm from '../BookingForm'
import DivBtn from "../../../UI/DivBtn";
import {WelcomeText} from "../../WelcomePage/style";

const BookingPage = () => {
    return (
        <Inner>
            <WelcomeText> MAKE AN APPOINTMENT </WelcomeText>
            <TextBox>
                Please read our FAQ before making a booking. You can find there all information about how to prepare for an appointment, how much it cost, and when we are sending custom designs.
            </TextBox>
            <BtnWrapper>
                <DivBtn>
                    <Link to='/faq'>
                        <OptionsLink>
                            FAQ
                        </OptionsLink>
                    </Link>
                </DivBtn>
            </BtnWrapper>
            <BookingForm/>
        </Inner>
    )
}

export default BookingPage;