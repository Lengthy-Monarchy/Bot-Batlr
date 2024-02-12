import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import NavBar from './Components/NavBar';

function App() {
  
  const [army, setArmy] = useState([]);

  return (
    <ChakraProvider>
      <NavBar army={army} />
      <BotCollection setArmy={setArmy} army={army} />
      <YourBotArmy army={army} setArmy={setArmy} />
    </ChakraProvider>
  );
}

export default App;



