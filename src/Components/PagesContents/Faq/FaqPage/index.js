import React from "react";
// Style
import {Inner, SmallHeading} from "../../../../Style";
import { InnerFaq, FaqHeading, Question, Answer } from './style'
import '../../../../index.css'
// Assets
import { FaqPageData } from '../../../../Data/faqData'

const {useState} = React;

const FaqPage = () => {
    const faqs = FaqPageData;
    const [ selectedQuestion, toggleQuestion ] = useState(-1);

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
                <SmallHeading style={{fontWeight: '400'}}>Have more questions? Feel free to email us at <br/> auraartistswanted@gmail.com</SmallHeading>
            </InnerFaq>
        </Inner>
    )
};

export default FaqPage;
