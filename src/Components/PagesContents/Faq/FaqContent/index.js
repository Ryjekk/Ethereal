import React from "react";
import { FaqWrapper, LeftColumn, RightColumn, FaqQ, FaqA, ColWrapper } from "./style";

import { FaqDataLeft, FaqDataRight } from "../../../../Data/FaqData/faqData";

const FaqContent = () => {

        const dataLeft = FaqDataLeft;
        const dataRight = FaqDataRight;

        return (
            <FaqWrapper>
                <LeftColumn className="left">
                    {dataLeft.map(( { question, answer }, index) => (
                        <ColWrapper key={`${index}`}>
                            <FaqQ>{question}</FaqQ>
                            <FaqA>{answer}</FaqA>
                        </ColWrapper>
                    ))}
                </LeftColumn>
                <RightColumn className='right'>
                    {dataRight.map(( { question, answer, answer1, answer2, answer3 }, index) => (
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