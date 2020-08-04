import React from 'react';
import { Container } from '../Style';

import NavBar from '../Components/NavBar';
import WelcomePage from '../Components/WelcomePage';
import MainContent from '../Components/MainContent';

function App() {
  return (
      <Container>
          <NavBar/>
          <WelcomePage />
          <MainContent />
      </Container>
  );
}

export default App;
