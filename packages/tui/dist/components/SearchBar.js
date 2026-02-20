import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { theme } from '../style/theme.js';
export default function SearchBar({
  onSubmit,
  isFocused = false
}) {
  const [value, setValue] = useState('');
  return /*#__PURE__*/React.createElement(Box, {
    marginBottom: 1,
    borderStyle: isFocused ? 'round' : 'single',
    borderColor: isFocused ? theme.colors.accent : 'gray',
    paddingX: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted,
    backgroundColor: isFocused ? theme.colors.accent : undefined
  }, "\u641C\u7D22:", ' '), /*#__PURE__*/React.createElement(TextInput, {
    value: value,
    onChange: setValue,
    focus: isFocused
  }));
}