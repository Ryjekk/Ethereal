import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import {BottomBox, Container} from "../../Style";
import AboutPage from '../../Components/PagesContents/About/AboutPage'
import FooterContent from "../../Components/Contents/FooterContent";

function About() {
    return (
        <Container>
            <Navbar/>
            <AboutPage />
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
}

export default About;