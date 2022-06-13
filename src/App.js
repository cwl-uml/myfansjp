import React from 'react';
import { ChakraProvider, Container, theme } from '@chakra-ui/react';

import KentoSan from './config/KentoSan.json';
import LightSan from './config/LightSan.json';
import MSan from './config/MSan.json';

import LandingPage from './containers/landing';

import './styles/index.css';

function App() {
  const content = {
    KentoSan,
    LightSan,
    MSan,
  };

  return (
    <ChakraProvider theme={theme}>
      <Container className="margin-top-16 margin-bottom-16">
        <LandingPage content={content} />
      </Container>
      {/* </Box> */}
    </ChakraProvider>
  );
}

export default App;
