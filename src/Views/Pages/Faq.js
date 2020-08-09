import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import FaqPage from '../../Components/PagesContents/Faq/FaqPage'
import FooterContent from "../../Components/Contents/FooterContent";
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