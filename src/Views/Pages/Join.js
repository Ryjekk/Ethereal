import React from "react";
import {BottomBox, Container} from "../../Style";
import Navbar from "../../Components/Contents/NavBar";
import FooterContent from "../../Components/Contents/FooterContent";
import JoinContent from '../../Components/PagesContents/Join/JoinContent'

const Join = () => {
    return (
        <Container>
            <Navbar/>
            <JoinContent/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    )
}

export default Join;
