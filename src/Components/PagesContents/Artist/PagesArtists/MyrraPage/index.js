import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../../../Contents/NavBar";
import FooterContent from "../../../../Contents/FooterContent";
// Components
import ArtistHead from "../../../../Contents/DivideComponent";
import ImgSlide from "../../../../Contents/ImgSlide";
import DivBtn from "../../../../UI/DivBtn";
// Style
import {ArtBtnWrap, Separator} from "../style";
import {BottomBox, Inner, OptionsLink} from "../../../../../Style";


const MyrraPage = () => {
    return (
        <div>
            <Navbar/>
            <ArtistHead text={'Myrra'}/>
            <ArtBtnWrap>
                <DivBtn>
                    <Link to='/booking'>
                        <OptionsLink>
                            Make an appointment
                        </OptionsLink>
                    </Link>
                </DivBtn>
                <Separator/>
                <DivBtn>
                    <a href='https://www.instagram.com/myrk.ink/' target="_blank" rel="noopener noreferrer">
                        <OptionsLink>
                            Check my IG
                        </OptionsLink>
                    </a>
                </DivBtn>
            </ArtBtnWrap>
            <Inner>
                <ImgSlide person="myrra"/>
            </Inner>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </div>
    )
}

export default MyrraPage;
