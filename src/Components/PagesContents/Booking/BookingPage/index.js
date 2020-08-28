import React from "react";
import {Link} from "react-router-dom";
// Components
import BookingForm from '../BookingForm'
import DivBtn from "../../../UI/DivBtn";
// Style
import {Inner, OptionsLink, Heading, BtnWrapper} from "../../../../Style";
import {TextBox} from "./style";

const BookingPage = () => {
    return (
        <Inner>
            <Heading> MAKE AN APPOINTMENT </Heading>
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