import React from "react";
import {Link} from "react-router-dom";
import { FaqWrapper, LeftColumn, RightColumn, FaqQ, FaqA, ColWrapper, FaqButtonWrapper } from "./style";
import { OptionsLink } from "../../NotFoundPage/style";

import { FaqDataLeft, FaqDataRight } from "../../../Data/FaqData/faqData";
import DivBtn from "../../UI/DivBtn";

const FaqContent = () => {

        const dataLeft = FaqDataLeft;
        const dataRight = FaqDataRight;

        return (
            <FaqWrapper>
                <FaqButtonWrapper>
                    <FaqQ style={{textAlign: "center"}}>Frequently Asked Questions</FaqQ>
                    <DivBtn>
                        <Link to='/faq'>
                            <OptionsLink>
                                FAQ
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </FaqButtonWrapper>
                <LeftColumn className="left">
                    {dataLeft.map(( { question, answer }, index) => (
                        <ColWrapper>
                            <FaqQ>{question}</FaqQ>
                            <FaqA>{answer}</FaqA>
                        </ColWrapper>
                    ))}
                </LeftColumn>
                <RightColumn className='right'>
                    {dataRight.map(( { question, answer, answer1, answer2, answer3 }, index) => (
                        <ColWrapper>
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