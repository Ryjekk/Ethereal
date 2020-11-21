import React from "react";
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

const DivideComponent = props => {
    const {text, paragraph} = props;

    let bgPosition = null;
    let bgImg = null;
    let guestHeight = null;
    let mobileBtn = null

    const makeMobileBtn = (textInner, link) => {
        mobileBtn = (
            <SMButtonWrapper>
                <DivBtn>
                    <Link to={link}>
                        <OptionsLink>
                            {textInner}
                        </OptionsLink>
                    </Link>
                </DivBtn>
            </SMButtonWrapper>
        )
    }

    if (text === "FAQ") {makeMobileBtn('FAQ', '/faq')}
    if (text === "OUR GUESTS") {
        makeMobileBtn('Check Artists', '/guests')
        guestHeight = "30vh"
    }

    switch (text) {
        case "Anna":
            bgImg = backPicAnna
            break;
        case "Myrra":
            bgImg = backPicMyrr
            break;
        case "FAQ":
            bgImg = backPicFaq
            bgPosition = 'right'
            break;
        default:
            bgImg = null;
    }

    return(
        <DivideWrapper style={{backgroundImage: `url(${bgImg})`,  backgroundPosition: `${bgPosition}`, height: `${guestHeight}`}}>
            <Heading>{text}</Heading>
            <Paragraph style={{textAlign: "center", padding: "0 20px"}}>{paragraph}</Paragraph>
            {mobileBtn}
        </DivideWrapper>
    )
}

export default DivideComponent;
