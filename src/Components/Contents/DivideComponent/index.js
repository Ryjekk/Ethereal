import React, {Component} from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../UI/DivBtn";
// Style
import {DivideWrapper} from "./style";
import {Paragraph, Heading, OptionsLink} from "../../../Style";
import {FaqButtonWrapper} from "../../PagesContents/Faq/FaqContent/style";

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
            <Heading>{this.props.text}</Heading>
            <Paragraph>{this.props.paragraph}</Paragraph>
            {faqBtn}
            </DivideWrapper>
        )
    }
}

export default DivideComponent;