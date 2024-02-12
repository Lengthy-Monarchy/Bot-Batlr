import React from 'react';
import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <VStack spacing="4">
      <Image src={bot.avatar_url} alt={`Bot ${bot.name}`} boxSize="200px" />
      <Box p="4" textAlign="center">
        <Text fontWeight="bold">{bot.name}</Text>
        <Text>Health: {bot.health}</Text>
        <Text>Damage: {bot.damage}</Text>
        <Text>Armor: {bot.armor}</Text>
        <Text>Class: {bot.bot_class}</Text>
        <Text fontSize="sm">{bot.catchphrase}</Text>
        <Button colorScheme="blue" mt="4" onClick={() => onEnlist(bot)}>Enlist to Army</Button>
        <Button colorScheme="gray" mt="2" onClick={onGoBack}>Back to Collection</Button>
      </Box>
    </VStack>
  );
}

export default BotSpecs;

