import React from "react";
import ArtistHead from "../../../Contents/DivideComponent";
import {Link} from "react-router-dom";
import {OptionsLink} from "../../NotFoundPage/style";
import DivBtn from "../../../UI/DivBtn";
import {ArtBtnWrap} from "./style";
import ImgSlide from "../../../Contents/ImgSlide";
import {Inner} from "../../../../Style";

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