import React from 'react';
// import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
// import NavBar from '../Components/Contents/NavBar';
// import WelcomePage from '../Components/PagesContents/WelcomePage';
// import WelcomePageParallax from '../Components/PagesContents/WelcomePage/WelcomePageParallax';
// import ArtistContent from '../Components/PagesContents/Artist/ArtistContent'
// import FaqContent from '../Components/PagesContents/Faq/FaqContent'
// import MapsGoogle from "../Components/Contents/MapsGoogle";
// import FooterContent from '../Components/Contents/FooterContent'
// import DivideComponent from "../Components/Contents/DivideComponent";
import { Container, Inner } from '../Style';

function App() {
  return (
      <Container>
          <Inner>
              <h1 style={{margin: "0 auto", paddingTop: "25%", fontSize: "3rem"}}>AURA REYKJAVIK INK COMING SOON...</h1>
          </Inner>
          {/* TODO uncoment */}
          {/* <NavBar/>
          <Parallax pages={2} className="ClearSearchbar">
              <ParallaxLayer speed={0.5}>
                  <WelcomePage />
              </ParallaxLayer >
          </Parallax>
          <WelcomePageParallax/>
          <DivideComponent text={"OUR CREW"} paragraph={"Best artist in town"}/>
          <Inner>
              <ArtistContent/>
          </Inner>
          <DivideComponent text={"FAQ"} paragraph={"Frequently Asked Questions"}/>
          <Inner>
              <FaqContent />
              <MapsGoogle/>
              <FooterContent/>
          </Inner> */}
      </Container>
  );
}

export default App;
