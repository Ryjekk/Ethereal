import React from "react";
import Navbar from "../../Components/Contents/NavBar";
import {Container} from "../../Style";
import CovidPage from "../../Components/PagesContents/Covid";

function Covid() {
    return (
        <Container>
            <Navbar/>
            <CovidPage/>
        </Container>
    );
}

export default Covid;
