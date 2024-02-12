import React from 'react';
import { Select } from '@chakra-ui/react';

function SortBar({ onSortChange }) {
  return (
    <Select placeholder="Sort bots" onChange={(e) => onSortChange(e.target.value)}>
      <option value="name">Name</option>
      <option value="health">Health</option>
      <option value="damage">Damage</option>
      <option value="armor">Armor</option>
    </Select>
  );
}

export default SortBar;

