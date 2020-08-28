import React from "react";
import {Link} from "react-router-dom";
// Components
import ArtistHead from "../../../Contents/DivideComponent";
import ImgSlide from "../../../Contents/ImgSlide";
import DivBtn from "../../../UI/DivBtn";
// Style
import {ArtBtnWrap} from "./style";
import {Inner, OptionsLink} from "../../../../Style";

const ArtistPage = () => {
    return (
        <div>
            <ArtistHead text={'Anna'}/>
            <ArtBtnWrap>
                <DivBtn>
                    <Link to='/booking'>
                        <OptionsLink>
                            Make an appointment
                        </OptionsLink>
                    </Link>
                </DivBtn>
            </ArtBtnWrap>
            <Inner>
                <ImgSlide/>
            </Inner>
        </div>
    )
}

export default ArtistPage;