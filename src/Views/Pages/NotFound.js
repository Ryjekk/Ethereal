import React from "react";

import Navbar from "../../Components/NavBar";
import NotFoundPage from '../../Components/NotFoundPage'
import FooterContent from "../../Components/FooterContent";

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