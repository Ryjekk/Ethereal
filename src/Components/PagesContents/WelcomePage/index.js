import React from "react";
// Style
import {VideoEl, Overlay, Scroller} from './style'
import {Paragraph, Heading} from "../../../Style";
// Assets
import welcomeVideo from '../../../Assets/Movies/movie.mp4'
import welcomeVideoWebm from '../../../Assets/Movies/movie_1.webm'
import WelcomeVideoPoster from '../../../Assets/skullBlack.jpg'

// TODO Optimize video for phones -> add gif instead ?> change for Iframes for mobile to work
// TODO Add animation when video is loading in - fade in text or other bs
// TODO Maybe add some animation or img made by ANN

const WelcomePage = () => {
    return (
        <>
            <VideoEl loop="loop" autoPlay="autoPlay" muted poster={WelcomeVideoPoster}>
                <source src={welcomeVideo} type="video/mp4"/>
                <source src={welcomeVideoWebm} type="video/webm"/>
                Your browser does not support video tag
                <br/>
            </VideoEl>
            <Overlay>
                <Heading>
                    AURA TATTOO
                </Heading>
                <Paragraph style={{textDecoration: 'underline'}}>
                    Borgartún 28 , 105 Reykjavik Iceland
                </Paragraph>
                <Scroller/>
            </Overlay>
        </>
    )
};

export default WelcomePage;
