import React from "react";
import {Inner} from "../../../../Style";
import GuestText from "./GuestText";
import GuestBio from "./GuestBio";
// GQL
import { useQuery } from "@apollo/react-hooks";
import GUEST_QUERY from "../../../../queries/guestQuery";

const PageGuests = () => {
    const {data, loading, error} = useQuery(GUEST_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const {guestPageData} = data

    return (
        <Inner>
            {/*todo channge this string*/}
            <GuestText/>
            {guestPageData.map(el => (
                <GuestBio
                    guestImg={`http://localhost:1337${el.guestImg[0].url}`}
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
