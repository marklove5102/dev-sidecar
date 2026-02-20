import React, { useState } from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { theme } from '../style/theme.js';
export default function IndexPage({
  isFocused = false
}) {
  const [services, setServices] = useState([{
    id: 'server',
    name: 'DevSidecar Core',
    status: 'Stopped'
  }, {
    id: 'proxy',
    name: 'System Proxy',
    status: 'Stopped'
  }]);
  const [message, setMessage] = useState('');
  const handleSelect = item => {
    const serviceId = item.value;
    const service = services.find(s => s.id === serviceId);
    if (!service) return;
    const newStatus = service.status === 'Running' ? 'Stopped' : 'Running';
    setServices(prev => prev.map(s => s.id === serviceId ? {
      ...s,
      status: newStatus
    } : s));
    setMessage(`Service ${service.name} ${newStatus === 'Running' ? 'started' : 'stopped'}`);
  };

  // Static items for menu to avoid cursor jump
  const menuItems = [{
    label: 'Toggle DevSidecar Core',
    value: 'server'
  }, {
    label: 'Toggle System Proxy',
    value: 'proxy'
  }];
  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    bold: true,
    color: theme.colors.primary
  }, "\u4E3B\u9875 - \u529F\u80FD\u5F00\u5173"), /*#__PURE__*/React.createElement(Box, {
    marginY: 1,
    flexDirection: "column",
    borderStyle: "round",
    borderColor: theme.colors.muted,
    padding: 1
  }, /*#__PURE__*/React.createElement(Text, {
    underline: true
  }, "Status:"), services.map(s => /*#__PURE__*/React.createElement(Box, {
    key: s.id,
    justifyContent: "space-between",
    width: 40
  }, /*#__PURE__*/React.createElement(Text, null, s.name, ":"), /*#__PURE__*/React.createElement(Text, {
    color: s.status === 'Running' ? theme.colors.accent : theme.colors.muted
  }, s.status)))), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, "Actions:"), /*#__PURE__*/React.createElement(SelectInput, {
    items: menuItems,
    onSelect: handleSelect,
    isFocused: isFocused
  })), message && /*#__PURE__*/React.createElement(Text, {
    color: theme.colors.accent,
    marginTop: 1
  }, message));
}