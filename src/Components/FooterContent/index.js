import React from "react";
import { Link}  from "react-router-dom";
//Style
import { InnerWrapper, ContentCol, Heading, ParagraphFoot, Social, SocialLink } from './style';
import { Options } from "../../Style";
//Assets
import sprite from '../../Assets/Icons/sprite.svg'

// TODO add links to <a>

const FooterContent = () => {
    return (
        <InnerWrapper>
            <ContentCol>
                <Heading>Location</Heading>
                <ParagraphFoot>
                    Laugavegur 105
                    <br/>
                    Reykjavik 101
                </ParagraphFoot>
            </ContentCol>
            <ContentCol>
                <Heading>Hours</Heading>
                <ParagraphFoot>
                    Open 5 days 10am to 5pm
                    <br/>
                    SATURDAY, SUNDAY CLOSED
                </ParagraphFoot>
                <Link to='/booking'>
                    <Options style={{textDecoration: "underline"}}>Link to booking</Options>
                </Link>
            </ContentCol>
            <ContentCol>
                <Heading>Contact</Heading>
                <ParagraphFoot>+354 776 32 41</ParagraphFoot>
                <ParagraphFoot>
                    <a href="mailto:webmaster@example.com" style={{textDecoration: "underline", color: "#f9f8f8"}}>example@gmail.com</a>
                </ParagraphFoot>
            </ContentCol>
            <ContentCol>
                <Heading>Follow</Heading>
                <Social>
                    <SocialLink href="https://www.facebook.com/" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#fb"}></use>
                        </svg>
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#ig"}></use>
                        </svg>
                    </SocialLink>
                    <SocialLink href="https://mail.google.com/" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#mail"}></use>
                        </svg>
                    </SocialLink>
                </Social>
            </ContentCol>
        </InnerWrapper>
    )
};

export default FooterContent;