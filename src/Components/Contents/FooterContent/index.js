import React from "react";
import { Link}  from "react-router-dom";
//Style
import { InnerWrapper, ContentCol, FooterHeading, ParagraphFoot, Social, SocialLink } from './style';
import { Options } from "../../../Style";
//Assets
import sprite from '../../../Assets/Icons/sprite.svg'
import {FooterData} from "../../../Data/footerData";

// TODO add links to <a>

const FooterContent = () => {
    return (
        <InnerWrapper>
            {FooterData.map((el) => (
                <ContentCol>
                    <FooterHeading>{el.heading}</FooterHeading>
                    <ParagraphFoot>
                        {el.paragraph_one}
                        <br/>
                        {el.paragraph_two}
                    </ParagraphFoot>
                    {/* For Hours*/}
                    <Link to={el.btn_link}>
                        <Options style={{textDecoration: "underline"}}>{el.btn_text}</Options>
                    </Link>
                    {/* For Contact*/}
                    <ParagraphFoot>
                        <a href={el.a_href} style={{textDecoration: "underline", color: "#f9f8f8"}}>{el.a_text}</a>
                    </ParagraphFoot>
                </ContentCol>
            ))}
            <ContentCol>
                <FooterHeading>Follow</FooterHeading>
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