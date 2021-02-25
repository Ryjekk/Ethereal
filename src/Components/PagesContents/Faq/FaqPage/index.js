import React, {useState} from "react";
// Style
import {Inner, SmallHeading} from "../../../../Style";
import { InnerFaq, FaqHeading, Question, Answer } from './style'
import '../../../../index.css'
// GQL
import { useQuery } from "@apollo/react-hooks";
import FAQ_QUERY from "../../../../queries/faqQuery";

const FaqPage = () => {
    const [ selectedQuestion, toggleQuestion ] = useState(-1);

    const {data, loading, error} = useQuery(FAQ_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const faqs = data.faqMainData;


    function openQuestion(index) {
        toggleQuestion(selectedQuestion === index ? -1 : index);
    }

    return (
        <Inner>
            <InnerFaq>
                <FaqHeading>FAQ's</FaqHeading>
                {faqs.map(( { question, answer, answer1, answer2, answer3  }, index) => (
                    <div key={`${index}`}>
                        <Question onClick={() => openQuestion(index)}>{question}</Question>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer1}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer2}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer3}</Answer>
                    </div>
                ))}
                <SmallHeading style={{fontWeight: '400'}}>Have more questions? Feel free to email us at <br/>aura.reykjavik@gmail.com</SmallHeading>
            </InnerFaq>
        </Inner>
    )
};

export default FaqPage;
