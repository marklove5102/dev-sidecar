function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { theme } from '../style/theme.js';
export default function Sidebar({
  items = [],
  onSelect,
  isFocused = true
}) {
  const handleSelect = item => {
    onSelect && onSelect(item.value);
  };
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    width: theme.spacing.sidebarWidth,
    paddingX: 1,
    borderStyle: "single",
    borderRight: true,
    borderLeft: false,
    borderTop: false,
    borderBottom: false,
    borderColor: isFocused ? theme.colors.accent : 'gray'
  }, /*#__PURE__*/React.createElement(Box, _extends({
    marginBottom: 1,
    borderStyle: "single",
    borderBottom: true,
    borderTop: false,
    borderLeft: false,
    borderRight: false,
    borderColor: isFocused ? theme.colors.accent : 'gray'
  }, isFocused ? {
    backgroundColor: theme.colors.accent
  } : {}), /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.logo,
    bold: true
  }, "Dev Sidecar - \u5F00\u53D1\u8005\u8FB9\u8F66")), /*#__PURE__*/React.createElement(SelectInput, {
    items: items,
    onSelect: handleSelect,
    isFocused: isFocused
  }));
}