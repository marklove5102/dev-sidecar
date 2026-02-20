import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import open from 'open';
import Link from 'ink-link';
import { theme } from '../style/theme.js';
export default function Footer({
  version = 'dev',
  stars = 0,
  isFocused = false
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const links = [{
    label: 'Greper',
    url: 'https://github.com/greper'
  }, {
    label: 'WangLiang',
    url: 'https://github.com/wangliang181230'
  }, {
    label: 'CuteOmega',
    url: 'https://github.com/cute-omega'
  }, {
    label: 'Project Home',
    url: 'https://github.com/docmirror/dev-sidecar'
  }];
  useInput((input, key) => {
    if (!isFocused) return;
    if (key.leftArrow) {
      setSelectedIndex(prev => Math.max(0, prev - 1));
    }
    if (key.rightArrow) {
      setSelectedIndex(prev => Math.min(links.length - 1, prev + 1));
    }
    if (key.return) {
      const link = links[selectedIndex];
      if (link) {
        open(link.url);
      }
    }
  });
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    borderStyle: "single",
    borderTop: true,
    borderBottom: false,
    borderLeft: false,
    borderRight: false,
    borderColor: isFocused ? theme.colors.accent : 'gray',
    paddingTop: 1,
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Box, {
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "\xA92020-2026 docmirror.cn \u2014 ", version), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, "Authors: "), links.slice(0, 3).map((link, index) => /*#__PURE__*/React.createElement(Box, {
    key: link.label,
    marginRight: 1
  }, index > 0 && /*#__PURE__*/React.createElement(Text, null, ", "), /*#__PURE__*/React.createElement(Link, {
    url: link.url
  }, /*#__PURE__*/React.createElement(Text, {
    backgroundColor: selectedIndex === index && isFocused ? theme.colors.accent : undefined,
    color: selectedIndex === index && isFocused ? theme.colors.background : theme.colors.text,
    bold: selectedIndex === index && isFocused,
    underline: selectedIndex === index && isFocused
  }, link.label)))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, null, "\u5982\u679C\u5B83\u89E3\u51B3\u4E86\u4F60\u7684\u95EE\u9898\uFF0C\u8BF7\u4E0D\u8981\u541D\u556C\u4F60\u7684star\u54DF\uFF01\u70B9\u8FD9\u91CC", '->'), /*#__PURE__*/React.createElement(Box, {
    marginLeft: 1
  }, /*#__PURE__*/React.createElement(Link, {
    url: links[3].url
  }, /*#__PURE__*/React.createElement(Text, {
    backgroundColor: selectedIndex === 3 && isFocused ? theme.colors.accent : undefined,
    color: selectedIndex === 3 && isFocused ? theme.colors.background : theme.colors.logo,
    bold: selectedIndex === 3 && isFocused,
    underline: selectedIndex === 3 && isFocused
  }, "[Stars: ", stars, "]")))), isFocused && /*#__PURE__*/React.createElement(Text, {
    color: "gray",
    dimColor: true
  }, "(Use Left/Right to select, Enter to open)"));
}