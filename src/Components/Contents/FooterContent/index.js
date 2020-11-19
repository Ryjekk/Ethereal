import React from "react";
import {Link}  from "react-router-dom";
//Style
import {InnerWrapper} from './style';
import {Options, Paragraph, MediumHeading} from "../../../Style";
//Data
import {FooterData} from "../../../Data/footerData";
import FooterSocial from "./FooterSocial";

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
            <FooterSocial/>
        </InnerWrapper>
    )
};

export default FooterContent;
