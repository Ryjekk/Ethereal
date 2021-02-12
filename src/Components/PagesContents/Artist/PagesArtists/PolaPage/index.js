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


const PolaPage = () => {
    return (
        <div>
            <Navbar/>
            <ArtistHead text={'Eerie.m'}/>
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
                    <a href='https://www.instagram.com/eerie.m.tattoo/' target="_blank" rel="noopener noreferrer">
                        <OptionsLink>
                            Check my IG
                        </OptionsLink>
                    </a>
                </DivBtn>
            </ArtBtnWrap>
            <Inner>
                <ImgSlide person="pola"/>
            </Inner>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </div>
    )
}

export default PolaPage;
