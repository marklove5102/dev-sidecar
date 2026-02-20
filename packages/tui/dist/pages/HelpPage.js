import React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../style/theme.js';
export default function HelpPage() {
  const helpItems = [{
    title: '帮助主页',
    path: 'doc/wiki/Home.md'
  }, {
    title: '加速服务使用说明',
    path: 'doc/wiki/加速服务使用说明.md'
  }, {
    title: '各平台安装说明',
    path: 'doc/wiki/各平台安装说明.md'
  }, {
    title: '解决Github访问不了或速度很慢的问题',
    path: 'doc/wiki/解决Github访问不了或速度很慢的问题.md'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "\u5E2E\u52A9\u4E2D\u5FC3"), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "\u66F4\u591A\u5185\u5BB9\u53C2\u8003:"), helpItems.map((item, index) => /*#__PURE__*/React.createElement(Box, {
    key: index,
    marginLeft: 2
  }, /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.text
  }, "- ", item.title, ": "), /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.muted
  }, item.path)))), /*#__PURE__*/React.createElement(Box, {
    marginTop: 1
  }, /*#__PURE__*/React.createElement(Text, null, "\u95EE\u9898\u53CD\u9988: "), /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent
  }, "https://github.com/docmirror/dev-sidecar/issues")));
}