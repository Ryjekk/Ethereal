import React from "react";
import {Link}  from "react-router-dom";
//Style
import {InnerWrapper, Social, SocialLink} from './style';
import {Options, Paragraph, MediumHeading} from "../../../Style";
//Assets
import sprite from '../../../Assets/Icons/sprite.svg'
import {FooterData} from "../../../Data/footerData";

const FooterContent = () => {
    return (
        <InnerWrapper>
            {FooterData.map((el) => (
                <div>
                    <MediumHeading>{el.heading}</MediumHeading>
                    <Paragraph>
                        {el.paragraph_one}
                        <br/>
                        {el.paragraph_two}
                    </Paragraph>
                    {/* For Hours*/}
                    <Link to={el.btn_link}>
                        <Options style={{textDecoration: "underline"}}>{el.btn_text}</Options>
                    </Link>
                    <br/>
                    <Link to={el.btn_link_COVID}>
                        <Options style={{textDecoration: "underline"}}>{el.btn_text_COVID}</Options>
                    </Link>
                    {/* For Contact*/}
                    <Paragraph>
                        <a href={el.a_href} style={{textDecoration: "underline", color: "#f9f8f8"}}>{el.a_text}</a>
                    </Paragraph>
                    <Paragraph>
                        <a href={el.a_href_two} style={{textDecoration: "underline", color: "#f9f8f8"}}>{el.a_text_two}</a>
                    </Paragraph>
                </div>
            ))}
            <div>
                <MediumHeading>Follow</MediumHeading>
                <Social>
                    <SocialLink href="https://www.facebook.com/anikawr" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#fb"}></use>
                        </svg>
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/aura.reykjavik/" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#ig"}></use>
                        </svg>
                    </SocialLink>
                    <SocialLink href="mailto:aura.reykjavik@gmail.com" target="_blank">
                        <svg>
                            <use xlinkHref={sprite + "#mail"}></use>
                        </svg>
                    </SocialLink>
                </Social>
            </div>
        </InnerWrapper>
    )
};

export default FooterContent;
