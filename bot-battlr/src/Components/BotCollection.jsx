import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box, Select } from '@chakra-ui/react';
import BotCard from './BotCard';

function BotCollection({ setArmy, army }) {
  const [bots, setBots] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => {
        switch (sort) {
          case 'name':
            return setBots([...data].sort((a, b) => a.name.localeCompare(b.name)));
          case 'bot_class':
            return setBots([...data].sort((a, b) => a.bot_class.localeCompare(b.bot_class)));
          case 'id':
            return setBots([...data].sort((a, b) => a.id - b.id));
          default:
            return setBots(data);
        }
      });
  }, [sort]);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <Box>
      <Select placeholder="Sort by" onChange={(e) => setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="bot_class">Class</option>
        <option value="id">ID</option>
      </Select>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="20px">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} handleEnlist={() => handleEnlist(bot)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BotCollection;
