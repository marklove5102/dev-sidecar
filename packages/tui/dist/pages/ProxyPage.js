import React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../style/theme.js';
export default function ProxyPage() {
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "Proxy Settings"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "System Proxy: ", /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent
  }, "System Default")), /*#__PURE__*/React.createElement(Text, null, "PAC URL:", ' ', /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "http://127.0.0.1:11223/pac"))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "Proxy settings are managed automatically. Check 'user_config.json5' for advanced configuration.")));
}