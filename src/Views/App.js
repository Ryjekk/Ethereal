import React from 'react';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import NavBar from '../Components/Contents/NavBar';
import WelcomePage from '../Components/PagesContents/WelcomePage';
import WelcomePageParallax from '../Components/PagesContents/WelcomePage/WelcomePageParallax';
import ArtistContent from '../Components/PagesContents/Artist/ArtistContent'
import FaqContent from '../Components/PagesContents/Faq/FaqContent'
import MapsGoogle from "../Components/Contents/MapsGoogle";
import FooterContent from '../Components/Contents/FooterContent'
import DivideComponent from "../Components/Contents/DivideComponent";
import { Container, Inner } from '../Style';

function App() {
  return (
      <Container>
          <NavBar/>
          <Parallax pages={2} className="ClearSearchbar">
              <ParallaxLayer speed={0.5}>
                  <WelcomePage />
              </ParallaxLayer >
          </Parallax>
          <WelcomePageParallax/>
          <DivideComponent text={"OUR CREW"}/>
          <Inner>
              <ArtistContent/>
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

export default App;
