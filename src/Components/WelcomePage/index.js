import React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { VideoEl, Overlay, WelcomeText } from './style'
import { Paragraph } from "../../Style";
import './Styles.css'

// Assets
import welcomeVideo from '../../Assets/Movies/movie.mp4'
import welcomeVideoWebm from '../../Assets/Movies/movie_1.webm'
import WelcomeVideoPoster from '../../Assets/skullBlack.jpg'

// TODO Optimize video for phones -> add gif instead ?> change for Iframes for mobile to work
// TODO Add animation when video is loading in - fade in text or other bs
// TODO Maybe add some animation or img made by ANN

const WelcomePage = () => {
    return (
        <Parallax pages={2} className="ClearSearchbar">
            <ParallaxLayer speed={0.5}>
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
                <Paragraph style={{textDecoration: 'underline'}}>
                    Laugavegur 105, Reykjavik IS
                </Paragraph>
                <div className="ScrollDown"/>
            </Overlay>
            </ParallaxLayer>
        </Parallax>
    )
};

export default WelcomePage;