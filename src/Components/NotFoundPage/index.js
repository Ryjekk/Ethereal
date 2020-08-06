import React from "react";
import { Link } from "react-router-dom";
import { Heading } from '../../Style'
import { Options } from "../NavBar/style";
import { OverlayWrapper, Paragraph404, BottomBox } from './style'
import FooterContent from "../FooterContent";
import DivBtn from "../UI/DivBtn";

// TODO change image DMCA

const NotFoundPage = () => {
    return (
        <OverlayWrapper>
            <Heading>
                Upssss! <br/>
                It looks like we lost your page
            </Heading>
            <Paragraph404>
                We searched high and low but couldn’t find what you’re looking for. <br/>
                Let’s find a better place for you to go.
            </Paragraph404>
            <DivBtn>
                <Link to='/'>
                    <Options>
                        Home
                    </Options>
                </Link>
            </DivBtn>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </OverlayWrapper>
    )
}

export default NotFoundPage;