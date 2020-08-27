import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import FooterContent from "../../Components/Contents/FooterContent";
import ArtistPage from "../../Components/PagesContents/Artist/ArtistPage";
import {BottomBox, Container} from "../../Style";

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