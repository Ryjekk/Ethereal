import React from "react";
import { MapIframe, MapWrapper } from './style'

const MapsGoogle = () => {
    return (
        <MapWrapper>
            <MapIframe
                scrolling="no"
                src="https://maps.google.com/maps?q=Reykjavik%20Laugavegur&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </MapIframe>
        </MapWrapper>
    )
};

export default MapsGoogle;

//https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.9634622315787!2d-21.93306117067185!3d64.14638099897473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDA4JzQ3LjAiTiAyMcKwNTUnNTcuMSJX!5e0!3m2!1sen!2spl!4v1596800583068!5m2!1sen!2spl