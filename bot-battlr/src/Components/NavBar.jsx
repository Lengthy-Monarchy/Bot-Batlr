import React from 'react';
import { Box, Flex, Text, Button, useColorMode, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaMoon, FaSun, FaRobot } from 'react-icons/fa';

function NavBar({ army }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="xl" fontWeight="bold">Bot Battlr</Text>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton as={Button} leftIcon={<FaRobot />} mr={4}>
              Your Bot Army ({army.length})
            </MenuButton>
            <MenuList>
              {army.map(bot => (
                <MenuItem key={bot.id}>{bot.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;


