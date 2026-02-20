import React from 'react';
import {Box} from 'ink';
import IndexPage from '../pages/IndexPage.js';
import HelpPage from '../pages/HelpPage.js';
import PluginPage from '../pages/PluginPage.js';
import ProxyPage from '../pages/ProxyPage.js';
import ServerPage from '../pages/ServerPage.js';
import SettingPage from '../pages/SettingPage.js';
import {theme} from '../style/theme.js';

export default function Content({path, isFocused = false}) {
	const renderByPath = () => {
		if (!path) return <IndexPage isFocused={isFocused} />;
		if (path.startsWith('/home')) return <IndexPage isFocused={isFocused} />;
		if (path.startsWith('/help')) return <HelpPage />;
		if (path.startsWith('/plugin')) return <PluginPage />;
		if (path.startsWith('/proxy')) return <ProxyPage />;
		if (path.startsWith('/server')) return <ServerPage />;
		if (path.startsWith('/settings')) return <SettingPage />;
		if (path.startsWith('/search')) return <IndexPage isFocused={isFocused} />;
		return <IndexPage isFocused={isFocused} />;
	};

	return (
		<Box
			paddingLeft={theme.spacing.padding}
			flexDirection="column"
			flexGrow={1}
			borderStyle={isFocused ? 'round' : 'single'}
			borderColor={isFocused ? theme.colors.accent : 'gray'}
		>
			{renderByPath()}
		</Box>
	);
}
