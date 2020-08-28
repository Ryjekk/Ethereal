import React, {Component} from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../UI/DivBtn";
// Style
import {DivideWrapper} from "./style";
import {Paragraph, Heading, OptionsLink} from "../../../Style";
import {FaqButtonWrapper} from "../../PagesContents/Faq/FaqContent/style";
// Assets
import backPic from '../../../Assets/AnnBg1.jpg'

class DivideComponent extends Component{
    render() {
        let faqBtn = null;
        let bgImg = null;
        if (this.props.text === "FAQ") {
            faqBtn =  (
                <FaqButtonWrapper>
                    <DivBtn>
                        <Link to='/faq'>
                            <OptionsLink>
                                FAQ
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </FaqButtonWrapper>
            )
        }

        if (this.props.text === "Anna") {
            bgImg = backPic
        }

        return(
            <DivideWrapper style={{backgroundImage: `url(${bgImg})`}}>
                <Heading>{this.props.text}</Heading>
                <Paragraph>{this.props.paragraph}</Paragraph>
                {faqBtn}
            </DivideWrapper>
        )
    }
}

export default DivideComponent;