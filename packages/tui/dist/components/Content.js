import React from 'react';
import { Box } from 'ink';
import IndexPage from '../pages/IndexPage.js';
import HelpPage from '../pages/HelpPage.js';
import PluginPage from '../pages/PluginPage.js';
import ProxyPage from '../pages/ProxyPage.js';
import ServerPage from '../pages/ServerPage.js';
import SettingPage from '../pages/SettingPage.js';
import { theme } from '../style/theme.js';
export default function Content({
  path,
  isFocused = false
}) {
  const renderByPath = () => {
    if (!path) return /*#__PURE__*/React.createElement(IndexPage, {
      isFocused: isFocused
    });
    if (path.startsWith('/home')) return /*#__PURE__*/React.createElement(IndexPage, {
      isFocused: isFocused
    });
    if (path.startsWith('/help')) return /*#__PURE__*/React.createElement(HelpPage, null);
    if (path.startsWith('/plugin')) return /*#__PURE__*/React.createElement(PluginPage, null);
    if (path.startsWith('/proxy')) return /*#__PURE__*/React.createElement(ProxyPage, null);
    if (path.startsWith('/server')) return /*#__PURE__*/React.createElement(ServerPage, null);
    if (path.startsWith('/settings')) return /*#__PURE__*/React.createElement(SettingPage, null);
    if (path.startsWith('/search')) return /*#__PURE__*/React.createElement(IndexPage, {
      isFocused: isFocused
    });
    return /*#__PURE__*/React.createElement(IndexPage, {
      isFocused: isFocused
    });
  };
  return /*#__PURE__*/React.createElement(Box, {
    paddingLeft: theme.spacing.padding,
    flexDirection: "column",
    flexGrow: 1,
    borderStyle: isFocused ? 'round' : 'single',
    borderColor: isFocused ? theme.colors.accent : 'gray'
  }, renderByPath());
}