import React from 'react';
import {BottomBox, Container} from "../../Style";
import Navbar from "../../Components/Contents/NavBar";
import FooterContent from "../../Components/Contents/FooterContent";
import ShopPage from "../../Components/PagesContents/Shop";

const Shop = () => {
    return (
        <Container>
            <Navbar/>
            <ShopPage/>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </Container>
    );
};

export default Shop;
