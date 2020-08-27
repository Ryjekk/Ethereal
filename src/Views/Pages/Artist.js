import React from "react";
import {BottomBox, Container} from "../../Style";
import Navbar from "../../Components/Contents/NavBar";
import FooterContent from "../../Components/Contents/FooterContent";
import ArtistPage from "../../Components/PagesContents/ArtistPage";

function Artist() {
    return (
        <Container>
            <Navbar/>
            <ArtistPage/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
}

export default Artist;