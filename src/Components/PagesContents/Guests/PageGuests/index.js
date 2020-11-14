import React from "react";
import {Inner} from "../../../../Style";
import GuestText from "./GuestText";
import GuestBio from "./GuestBio";

import {GuestBioTab} from '../../../../Data/guestBioTab'

const PageGuests = () => {
    return (
        <Inner>
            <GuestText/>
            {GuestBioTab.map(el => (
                <GuestBio
                    guestImg={el.guestImg}
                    guestName={el.guestName}
                    guestDates={el.guestDates}
                    guestParagraph1={el.guestParagraph1}
                    guestParagraph2={el.guestParagraph2}
                    guestIg={el.guestIg}
                    guestGalleryName={el.guestGalleryName}
                />
            ))}

        </Inner>
    )
}

export default PageGuests;
