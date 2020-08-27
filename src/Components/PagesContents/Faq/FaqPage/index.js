import React from "react";
import {Inner, SmallHeading} from "../../../../Style";
import { InnerFaq, FaqBox, FaqHeading, Question, Answer } from './style'
import '../../../../index.css'

import { FaqPageData } from '../../../../Data/FaqData/faqData'

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
                    <FaqBox key={`${index}`}>
                        <Question onClick={() => openQuestion(index)}>{question}</Question>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer1}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer2}</Answer>
                        <Answer className={`${selectedQuestion === index ? 'faqOpenQuestion' : ''}`}>{answer3}</Answer>
                    </FaqBox>
                ))}
                <SmallHeading style={{fontWeight: '400'}}>Have more questions? Feel free to email us at <br/> exampletattoo@gmail.com</SmallHeading>
            </InnerFaq>
        </Inner>
    )
};

export default FaqPage;