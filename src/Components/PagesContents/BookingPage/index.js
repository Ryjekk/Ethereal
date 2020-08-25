import React from "react";
import {Link} from "react-router-dom";
import {Inner} from "../../../Style";
import {OptionsLink} from "../NotFoundPage/style";
import {BookingImg, BtnWrapper} from "./style";
import BookingForm from '../../Contents/BookingForm/'
import DivBtn from "../../UI/DivBtn";

const BookingPage = () => {
    return (
        <Inner>
            <BookingImg/>

            <div>
                Please read our FAQ before making a booking. You can find there all information about how to prepare for an appointment, how much it cost, and when we are sending custom designs.
            </div>

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