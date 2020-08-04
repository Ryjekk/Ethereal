import React from "react";
import { VideoEl, Overlay, WelcomeText, WelcomeParagraph } from './style'

// Assets
import welcomeVideo from '../../Assets/Movies/movie.mp4'
import welcomeVideoWebm from '../../Assets/Movies/movie_1.webm'

// TODO Optimize video for phones -> add gif instead ?> change for Iframes for mobile to work
// TODO Add animation when video is loading in - fade in text or other bs

const WelcomePage = () => {
    return (
        <>
            <VideoEl loop="loop" autoPlay="autoPlay" muted>
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
        </>
    )
};

export default WelcomePage;