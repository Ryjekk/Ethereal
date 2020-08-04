import React from 'react';

import {
    Container,
    InnerLanding,
    Spacing,
    FixedSpacing
} from '../Style';
import NavBar from '../Components/NavBar';
import WelcomePage from '../Components/WelcomePage';
import Testo from '../Components/Testo';

function App() {
  return (
      <Container>
          <NavBar/>
          <InnerLanding>
              <Spacing>
                  <WelcomePage />
              </Spacing>
          </InnerLanding>
              <Testo />
      </Container>
  );
}

export default App;
