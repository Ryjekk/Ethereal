import {gql} from "@apollo/client";

const GUEST_QUERY = gql`
    query {
        guestPageData {
            guestName
            guestDates
            guestParagraph1
            guestParagraph2
            guestIg
            guestGalleryName
            guestImg {
                url
            }
            img_gallery {
                width
                height
                src {
                    url
                }
            }
        }
    }
`;

export default GUEST_QUERY;
