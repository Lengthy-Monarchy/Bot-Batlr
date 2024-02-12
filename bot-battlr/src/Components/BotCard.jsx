import React, { useState } from 'react';
import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';

function BotCard({ bot, handleEnlist, handleRelease, handleDischarge }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" textAlign="center">
      <Image src={bot.avatar_url} alt={`Bot ${bot.name}`} boxSize="150px" m="auto" />
      <Text fontWeight="bold" mt="2">{bot.name}</Text>
      {showDetails && (
        <VStack mt="2">
          <Text fontSize="sm">ID: {bot.id}</Text>
          <Text fontSize="sm">Health: {bot.health}</Text>
          <Text fontSize="sm">Damage: {bot.damage}</Text>
          <Text fontSize="sm">Armor: {bot.armor}</Text>
          <Text fontSize="sm">Catchphrase: "{bot.catchphrase}"</Text>
        </VStack>
      )}
      <Button size="sm" mt="2" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'View More'}
      </Button>
      {handleEnlist && <Button colorScheme="blue" mt="2" onClick={handleEnlist}>Enlist</Button>}
      {handleRelease && <Button colorScheme="teal" mt="2" onClick={handleRelease}>Release</Button>}
      {handleDischarge && <Button colorScheme="red" mt="2" onClick={handleDischarge}>Discharge</Button>}
    </Box>
  );
}

export default BotCard;



