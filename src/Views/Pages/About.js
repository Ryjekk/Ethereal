import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import AboutPage from '../../Components/PagesContents/About/AboutPage'
import FooterContent from "../../Components/Contents/FooterContent";
import {BottomBox, Container} from "../../Style";

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