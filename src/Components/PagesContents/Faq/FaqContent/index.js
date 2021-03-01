import React from "react";
// Style
import {ColWrapper, FaqWrapper, LeftColumn, RightColumn} from "./style";
import {MediumHeading, Paragraph} from "../../../../Style";

const FaqContent = ({faqRightData, faqLeftData}) => {
    return (
        <FaqWrapper>
            {faqRightData || faqLeftData ? <>
                <LeftColumn className="left">
                    {faqLeftData.map(({ question, answer }, index) => (
                        <ColWrapper key={`${index}`}>
                            <MediumHeading>{question}</MediumHeading>
                            <Paragraph>{answer}</Paragraph>
                        </ColWrapper>
                    ))}
                </LeftColumn>
                <RightColumn className='right'>
                    {faqRightData.map(({ question, answer, answer1, answer2, answer3 }, index) => (
                        <ColWrapper key={`${index}`}>
                            <MediumHeading>{question}</MediumHeading>
                            <Paragraph>{answer}</Paragraph>
                            <Paragraph>{answer1}</Paragraph>
                            <Paragraph>{answer2}</Paragraph>
                            <Paragraph>{answer3}</Paragraph>
                        </ColWrapper>
                    ))}
                </RightColumn>
            </> : ''}
        </FaqWrapper>
    )
}

export default FaqContent
