import React, {Component} from "react";
import {DivideWelcome, DivideWrapper} from "./style";
import {Paragraph} from "../../../Style";
import {FaqButtonWrapper} from "../../PagesContents/Faq/FaqContent/style";
import DivBtn from "../../UI/DivBtn";
import {Link} from "react-router-dom";
import {OptionsLink} from "../../PagesContents/NotFoundPage/style";

class DivideComponent extends Component{
    render() {
        let faqBtn = null;
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

        return(
            <DivideWrapper>
            <DivideWelcome>{this.props.text}</DivideWelcome>
            <Paragraph>{this.props.paragraph}</Paragraph>
            {faqBtn}
            </DivideWrapper>
        )
    }
}

export default DivideComponent;