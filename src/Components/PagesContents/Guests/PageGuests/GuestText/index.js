import React from "react";
import {Heading, Paragraph} from "../../../../../Style";
import {GuestTextBox} from "./style";

const GuestText = () => {
    return (
        <GuestTextBox>
            <Heading style={{textAlign: "center"}}>Guest Spots</Heading>
            <Paragraph>
                At Aura Tattoo we want to bring you some of the best tattoo artists in the business. They are specialise in a specific style of tattooing. It is a privilege for us to be able to bring them to our studio in Reykjavik.
            </Paragraph>
            <Paragraph>
                Here you will find what tattoo artists will be visiting our studio in the future.
            </Paragraph>
            <Paragraph>
                We will keep you informed about when a given artist will be available at the studio. In the meantime, you can subscribe to the waiting list.
            </Paragraph>
        </GuestTextBox>
    )
}

export default GuestText;
