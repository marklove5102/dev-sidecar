import React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../style/theme.js';
export default function PluginPage() {
  const plugins = [{
    name: 'free-eye',
    status: 'Enabled'
  }, {
    name: 'git',
    status: 'Enabled'
  }, {
    name: 'node',
    status: 'Enabled'
  }, {
    name: 'overwall',
    status: 'Enabled'
  }, {
    name: 'pip',
    status: 'Enabled'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "\u63D2\u4EF6\u7BA1\u7406"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    flexDirection: "column"
  }, plugins.map((plugin, index) => /*#__PURE__*/React.createElement(Box, {
    key: index,
    marginLeft: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent
  }, "\u2714 ", plugin.name), /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, " (", plugin.status, ")")))));
}