import React from 'react';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import NavBar from '../Components/Contents/NavBar';
import WelcomePage from '../Components/PagesContents/WelcomePage';
import WelcomePageParallax from '../Components/PagesContents/WelcomePage/WelcomePageParallax';
import ArtistContent from '../Components/PagesContents/Artist/ArtistContent'
import GuestsContent from "../Components/PagesContents/Artist/GuestsContent";
import FaqContent from '../Components/PagesContents/Faq/FaqContent'
import MapsGoogle from "../Components/Contents/MapsGoogle";
import FooterContent from '../Components/Contents/FooterContent'
import DivideComponent from "../Components/Contents/DivideComponent";
// import ComingSoon from "../Components/PagesContents/ComingSoon";
import { Container, Inner } from '../Style';

class App extends React.Component {
    // fake authentication Promise
    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 2500)) // 2 seconds
    }

    componentDidMount(){
        this.authenticate().then(() => {
            const el = document.getElementById('ipl-progress-indicator')
            if(el){
                // fade out
                el.classList.add('available')
                setTimeout(() => {
                    // remove from DOM
                    el.outerHTML = ''
                }, 2500)
            }
        })
    }

    render() {
        return (
            <Container>
                {/*<ComingSoon/>*/}
                {/* TODO uncoment */}
                <NavBar/>
                <Parallax pages={2} className="ClearSearchbar">
                    <ParallaxLayer speed={0.5}>
                        <WelcomePage />
                    </ParallaxLayer >
                </Parallax>
                <WelcomePageParallax/>
                <DivideComponent text={"OUR CREW"} paragraph={"Book an appointment with one of our artists and get awesome custom-designed tattoo!"}/>
                <Inner>
                    <ArtistContent/>
                </Inner>
                <DivideComponent text={"OUR GUESTS"} paragraph={"Meet Our Guests. (Guests Spots are time-framed events)"}/>
                <Inner>
                    <GuestsContent/>
                </Inner>
                <DivideComponent text={"FAQ"} paragraph={"Frequently Asked Questions"}/>
                <Inner>
                    <FaqContent />
                    <MapsGoogle/>
                    <FooterContent/>
                </Inner>
            </Container>
        );
    }


}

export default App;
