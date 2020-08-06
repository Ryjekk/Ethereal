import React from 'react';
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
//Style
import { Container, Inner } from '../Style';
//Components
import NavBar from '../Components/NavBar';
import WelcomePage from '../Components/WelcomePage';
import WelcomePageParallax from '../Components/WelcomePageParallax';
import FooterContent from '../Components/FooterContent'

function App() {
  return (
      <Container>
          <NavBar/>
          <Parallax pages={2} className="ClearSearchbar">
              <ParallaxLayer speed={0.5}>
                  <WelcomePage />
              </ParallaxLayer>
          </Parallax>
              <WelcomePageParallax />
          <Inner>
              <FooterContent/>
          </Inner>
      </Container>
  );
}

export default App;
