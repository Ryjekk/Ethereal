import React, {Component} from "react";
import {Link} from "react-router-dom";
// Components
import DivBtn from "../../UI/DivBtn";
// Style
import {DivideWrapper} from "./style";
import {Paragraph, Heading, OptionsLink, SMButtonWrapper} from "../../../Style";

// Assets
import backPicAnna from '../../../Assets/Profile/Anna/AnnaBg1.jpg'
import backPicMyrr from '../../../Assets/Profile/Myrra/MyrrBg1.jpg'
import backPicFaq from '../../../Assets/Backgrounds/b2c.jpg'

class DivideComponent extends Component{
    render() {
        let faqBtn = null;
        let guestBtn = null;
        let bgImg = null;
        let guestHeight = null;

        if (this.props.text === "FAQ") {
            faqBtn =  (
                <SMButtonWrapper>
                    <DivBtn>
                        <Link to='/faq'>
                            <OptionsLink>
                                FAQ
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </SMButtonWrapper>
            )
        }

        if (this.props.text === "OUR GUESTS") {
            guestBtn = (
                <SMButtonWrapper>
                    <DivBtn>
                        <Link to='/guests'>
                            <OptionsLink>
                                Our Guests
                            </OptionsLink>
                        </Link>
                    </DivBtn>
                </SMButtonWrapper>
            )
        }

        if (this.props.text === "Anna") {
            bgImg = backPicAnna
        } else if (this.props.text === "Myrra") {
            bgImg = backPicMyrr
        } else if (this.props.text === "FAQ") {
            bgImg = backPicFaq
        }

        if (this.props.text === "OUR GUESTS") {
            guestHeight = "30vh"
        }
        return(
            <DivideWrapper style={{backgroundImage: `url(${bgImg})`, height: `${guestHeight}`}}>
                <Heading>{this.props.text}</Heading>
                <Paragraph style={{textAlign: "center", padding: "0 20px"}}>{this.props.paragraph}</Paragraph>
                {guestBtn}
                {faqBtn}
            </DivideWrapper>
        )
    }
}

export default DivideComponent;
