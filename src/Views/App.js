import React from 'react';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import NavBar from '../Components/Contents/NavBar';
import WelcomePage from '../Components/PagesContents/WelcomePage';
import WelcomePageParallax from '../Components/PagesContents/WelcomePage/WelcomePageParallax';
import ArtistContent from '../Components/PagesContents/Artist/ArtistContent'
import GuestsContent from "../Components/PagesContents/Guests/GuestsContent";
import FaqContent from '../Components/PagesContents/Faq/FaqContent'
import MapsGoogle from "../Components/Contents/MapsGoogle";
import FooterContent from '../Components/Contents/FooterContent'
import DivideComponent from "../Components/Contents/DivideComponent";
import { Container, Inner } from '../Style';
// GQL
import { useQuery } from "@apollo/react-hooks";
import FAQ_QUERY from "../queries/faqQuery";
import TEAM_QUERY from "../queries/teamQuery";
import GUEST_QUERY from "../queries/guestQuery";

const App = () => {

    const {data, loading, error} = useQuery(FAQ_QUERY);
    const {data: dataGuest, loading: loadingGuest, error: errorGuest} = useQuery(GUEST_QUERY);
    const {data: dataTeam, loading: loadingTeam, error: errorTeam} = useQuery(TEAM_QUERY);


    if (loading || loadingGuest || loadingTeam) return 'Loading...';
    if (error || errorGuest || errorTeam) return `Error! ${error.message}`;
    const {faqLeftData} = data
    const {faqRightData} = data
    let {mainArtistsData} = dataTeam;
    let {guestPageData} = dataGuest;

    return (
        <Container>
            <NavBar/>
            <Parallax pages={2} className="ClearSearchbar">
                <ParallaxLayer speed={0.5}>
                    <WelcomePage />
                </ParallaxLayer >
            </Parallax>
            <WelcomePageParallax/>
            <DivideComponent text={"OUR CREW"} paragraph={"Book an appointment with one of our artists and get awesome custom-designed tattoo!"}/>
            <Inner>
                <ArtistContent mainArtistsData={mainArtistsData}/>
            </Inner>
            <DivideComponent text={"OUR GUESTS"} paragraph={"Meet Our Guests. (Guests Spots are time-framed events)"}/>
            <GuestsContent guestPageData={guestPageData}/>
            <DivideComponent text={"FAQ"} paragraph={"Frequently Asked Questions"}/>
            <Inner>
                <FaqContent faqRightData={faqRightData} faqLeftData={faqLeftData}/>
                <MapsGoogle/>
                <FooterContent/>
            </Inner>
        </Container>
    );
}

export default App;
