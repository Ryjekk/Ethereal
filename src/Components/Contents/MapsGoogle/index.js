import React from "react";
// Style
import {MapIframe, MapWrapper} from './style'

const MapsGoogle = () => {
    return (
        <MapWrapper>
            <MapIframe
                scrolling="no"
                src="https://maps.google.com/maps?q=Reykjavik%28Borgartún&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </MapIframe>
        </MapWrapper>
    )
};

export default MapsGoogle;
