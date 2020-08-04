import React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { VideoEl, Overlay, WelcomeText, WelcomeParagraph } from './style'
import './ClearBar.css'

// Assets
import welcomeVideo from '../../Assets/Movies/movie.mp4'
import welcomeVideoWebm from '../../Assets/Movies/movie_1.webm'
import WelcomeVideoPoster from '../../Assets/skullBlack.jpg'

// TODO Optimize video for phones -> add gif instead ?> change for Iframes for mobile to work
// TODO Add animation when video is loading in - fade in text or other bs

const WelcomePage = () => {
    return (
        <Parallax pages={2} className="ClearSearchbar">
            <ParallaxLayer>
            <VideoEl loop="loop" autoPlay="autoPlay" muted poster={WelcomeVideoPoster}>
                <source src={welcomeVideo} type="video/mp4"/>
                <source src={welcomeVideoWebm} type="video/webm"/>
                Your browser does not support video tag
                <br/>
            </VideoEl>
            <Overlay>
                <WelcomeText>
                    ETHRERAL TOTTOO
                </WelcomeText>
                <WelcomeParagraph style={{textDecoration: 'underline'}}>
                    Laugavegur 105, Reykjavik IS
                </WelcomeParagraph>
            </Overlay>
            </ParallaxLayer>
        </Parallax>
    )
};

export default WelcomePage;