import React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../style/theme.js';
export default function SettingPage() {
  const settings = [{
    key: 'Auto Start',
    value: 'Enabled'
  }, {
    key: 'Theme',
    value: 'Default'
  }, {
    key: 'Log Level',
    value: 'Info'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "\u8BBE\u7F6E"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    flexDirection: "column"
  }, settings.map(s => /*#__PURE__*/React.createElement(Text, {
    key: s.key
  }, s.key, ": ", /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent
  }, s.value)))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "\u66F4\u591A\u8BBE\u7F6E\u8BF7\u7F16\u8F91 ~/user_config.json5 \u6587\u4EF6")));
}