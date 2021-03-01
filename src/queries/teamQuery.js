import {gql} from "@apollo/client";

const TEAM_QUERY = gql`
    query {
        mainArtistsData {
            heading
            btn_text
            btn_link
            paragraph_one
            paragraph_two
            paragraph_three
            ima {
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

export default TEAM_QUERY;
