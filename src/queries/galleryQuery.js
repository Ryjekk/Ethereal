import {gql} from "@apollo/client";

const GALLEY_QUERY = gql`
    query {
        guestPageData {
            img_gallery {
                width
                height
                src {
                    url
                }
            }
        }
        mainArtistsData {
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

export default GALLEY_QUERY;
