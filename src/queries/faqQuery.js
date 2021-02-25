import {gql} from "@apollo/client";

const FAQ_QUERY = gql`
    query {
        faqLeftData {
            question
            answer
        }
        faqRightData {
            question
            answer
        }
        faqMainData {
            question
            answer
        }
    }
`;

export default FAQ_QUERY;
