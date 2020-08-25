import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import {BottomBox, Container} from "../../Style";
import BookingPage from '../../Components/PagesContents/BookingPage'
import FooterContent from "../../Components/Contents/FooterContent";
import {BookingImg} from "../../Components/PagesContents/BookingPage/style";

function Booking() {
    return (
        <Container>
            <Navbar/>
            <BookingImg/>
            <BookingPage/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
}

export default Booking;