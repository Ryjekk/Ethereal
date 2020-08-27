import React from "react";
import {ColWrapper, FaqA, FaqQ, FaqWrapper, LeftColumn, RightColumn} from "./style";
import {FaqDataLeft, FaqDataRight} from "../../../../Data/faqData";

const FaqContent = () => {

        return (
            <FaqWrapper>
                <LeftColumn className="left">
                    {FaqDataLeft.map(({ question, answer }, index) => (
                        <ColWrapper key={`${index}`}>
                            <FaqQ>{question}</FaqQ>
                            <FaqA>{answer}</FaqA>
                        </ColWrapper>
                    ))}
                </LeftColumn>
                <RightColumn className='right'>
                    {FaqDataRight.map(({ question, answer, answer1, answer2, answer3 }, index) => (
                        <ColWrapper key={`${index}`}>
                            <FaqQ>{question}</FaqQ>
                            <FaqA>{answer}</FaqA>
                            <FaqA>{answer1}</FaqA>
                            <FaqA>{answer2}</FaqA>
                            <FaqA>{answer3}</FaqA>
                        </ColWrapper>
                    ))}
                </RightColumn>
            </FaqWrapper>
        )
}

export default FaqContent