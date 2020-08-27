import React from 'react';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
//Style
import { Container, Inner } from '../Style';
//Components
import NavBar from '../Components/Contents/NavBar';
import WelcomePage from '../Components/PagesContents/WelcomePage';
import WelcomePageParallax from '../Components/PagesContents/WelcomePage/WelcomePageParallax';
import ArtistContent from '../Components/PagesContents/Artist/ArtistContent'
import FaqContent from '../Components/PagesContents/Faq/FaqContent'
import MapsGoogle from "../Components/Contents/MapsGoogle";
import FooterContent from '../Components/Contents/FooterContent'
import ArtistHead from "../Components/PagesContents/Artist/ArtistHead";
import FaqHead from "../Components/PagesContents/Faq/FaqHead";

function App() {
  return (
      <Container>
          <NavBar/>
          {/* TODO maybe delete paralax package*/}
          <Parallax pages={2} className="ClearSearchbar">
              <ParallaxLayer speed={0.5}>
                  <WelcomePage />
              </ParallaxLayer >
          </Parallax>
          <WelcomePageParallax/>
          <ArtistHead/>
          <Inner>
              <ArtistContent/>
          </Inner>
              <FaqHead/>
          <Inner>
              <FaqContent />
              <MapsGoogle/>
              <FooterContent/>
          </Inner>
      </Container>
  );
}

export default App;
