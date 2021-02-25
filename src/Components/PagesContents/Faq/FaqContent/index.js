import React from "react";
// Style
import {ColWrapper, FaqWrapper, LeftColumn, RightColumn} from "./style";
import {MediumHeading, Paragraph} from "../../../../Style";
// GQL
import { useQuery } from "@apollo/react-hooks";
import FAQ_QUERY from "../../../../queries/faqQuery";

const FaqContent = () => {
    const {data, loading, error} = useQuery(FAQ_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const {faqLeftData} = data
    const {faqRightData} = data

    return (
        <FaqWrapper>
            {data ? <>
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
