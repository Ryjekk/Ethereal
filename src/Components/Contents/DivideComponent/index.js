import React, {Component} from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../UI/DivBtn";
// Style
import {DivideWrapper} from "./style";
import {Paragraph, Heading, OptionsLink} from "../../../Style";
import {FaqButtonWrapper} from "../../PagesContents/Faq/FaqContent/style";
// Assets
import backPicAnna from '../../../Assets/Profile/Anna/AnnaBg1.jpg'
import backPicDeb from '../../../Assets/Profile/Deb/DebBg1.jpg'
import backPicMyrr from '../../../Assets/Profile/Myrra/MyrrBg1.jpg'
import backPicFaq from '../../../Assets/Backgrounds/b1.jpg'

class DivideComponent extends Component{
    render() {
        let faqBtn = null;
        let bgImg = null;
        let guestHeight = null;

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

        // TODO BGM FOR EACH ARIST + DEFAULT
        if (this.props.text === "Anna") {
            bgImg = backPicAnna
        } else if  (this.props.text === "Deborah") {
            bgImg = backPicDeb
        } else if (this.props.text === "Myrra") {
            bgImg = backPicMyrr
        } else if (this.props.text === "FAQ") {
            bgImg = backPicFaq
        }

        if (this.props.text === "OUR GUESTS") {
            guestHeight = "20vh"
        }
        return(
            <DivideWrapper style={{backgroundImage: `url(${bgImg})`, height: `${guestHeight}`}}>
                <Heading>{this.props.text}</Heading>
                <Paragraph style={{textAlign: "center", padding: "0 20px"}}>{this.props.paragraph}</Paragraph>
                {faqBtn}
            </DivideWrapper>
        )
    }
}

export default DivideComponent;
