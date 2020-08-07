import React from "react";
import Navbar from "../../Components/NavBar";
import FaqPage from '../../Components/FaqPage'
import FooterContent from "../../Components/FooterContent";
import {BottomBox, Container} from "../../Style";

function Faq() {
    return (
        <Container>
            <Navbar/>
            <FaqPage />
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
}

export default Faq;