import React from "react";
import {BottomBox, Container} from "../../Style";
import Navbar from "../../Components/Contents/NavBar";
import FooterContent from "../../Components/Contents/FooterContent";
import PageGuests from "../../Components/PagesContents/Guests/PageGuests";

const Guests = () => {
    return (
        <Container>
            <Navbar/>
            <PageGuests/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    )
}

export default Guests;
