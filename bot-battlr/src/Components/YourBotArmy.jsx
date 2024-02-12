import React from 'react';
import { SimpleGrid, Button, Box } from '@chakra-ui/react';
import BotCard from './BotCard';

function YourBotArmy({ army, setArmy }) {
  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
    fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' });
  };

  const clearTray = () => {
    setArmy([]);
  };

  return (
    <Box mt="4">
      <Button colorScheme="red" mb="4" onClick={clearTray}>Clear Tray</Button>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="20px">
        {army.map(bot => (
          <BotCard key={bot.id} bot={bot} handleDischarge={() => dischargeBot(bot.id)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default YourBotArmy;



