import React from "react";

import Navbar from "../../Components/Contents/NavBar";
import NotFoundPage from '../../Components/PagesContents/NotFoundPage'
import FooterContent from "../../Components/Contents/FooterContent";

import { BottomBox, Container } from '../../Style'

function NotFound() {
    return (
        <Container>
            <Navbar/>
            <NotFoundPage/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
}

export default NotFound;