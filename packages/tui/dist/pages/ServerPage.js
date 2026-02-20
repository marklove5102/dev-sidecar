import React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../style/theme.js';
export default function ServerPage() {
  const stats = {
    uptime: 'Running',
    requests: 'N/A',
    errors: 0,
    memory: 'N/A'
  };
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "\u670D\u52A1\u72B6\u6001"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "\u72B6\u6001: ", /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent
  }, stats.uptime)), /*#__PURE__*/React.createElement(Text, null, "\u8BF7\u6C42: ", /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, stats.requests)), /*#__PURE__*/React.createElement(Text, null, "\u9519\u8BEF: ", /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, stats.errors))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "(\u5B9E\u65F6\u7EDF\u8BA1\u4FE1\u606F\u5728 TUI \u6A21\u5F0F\u4E0B\u6682\u4E0D\u53EF\u7528)")));
}