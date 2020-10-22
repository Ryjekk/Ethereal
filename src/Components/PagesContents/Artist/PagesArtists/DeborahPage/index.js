import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../../../Contents/NavBar";
import FooterContent from "../../../../Contents/FooterContent";
// Components
import ArtistHead from "../../../../Contents/DivideComponent";
import ImgSlide from "../../../../Contents/ImgSlide";
import DivBtn from "../../../../UI/DivBtn";
// Style
import {BottomBox, Inner, OptionsLink} from "../../../../../Style";
import {Separator, ArtBtnWrap} from "../style";


const DeborahPage = () => {
    return (
        <div>
            <Navbar/>
            <ArtistHead text={'Deborah'}/>
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
                    <a href='https://www.instagram.com/treespirits.tattoo/' target="_blank" rel="noopener noreferrer">
                        <OptionsLink>
                            Check my IG
                        </OptionsLink>
                    </a>
                </DivBtn>
            </ArtBtnWrap>
            <Inner>
                <ImgSlide/>
            </Inner>
            <BottomBox>
                <FooterContent/>
            </BottomBox>
        </div>
    )
}

export default DeborahPage;
