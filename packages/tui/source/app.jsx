import React, {useState} from 'react';
import {Box, useInput} from 'ink';
import SearchBar from './components/SearchBar.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import {menus} from './components/menuData.js';

export default function App() {
	const [path, setPath] = useState('/home');
	const [focusId, setFocusId] = useState('sidebar'); // 'sidebar' | 'search' | 'content'

	useInput((input, key) => {
		if (key.tab) {
			// Tab to switch focus
			setFocusId(prev => {
				if (prev === 'sidebar') return 'content';
				if (prev === 'content') return 'footer';
				if (prev === 'footer') return 'search';
				return 'sidebar';
			});
		}
	});

	const items = menus;

	return (
		<Box flexDirection="column" padding={1}>
			<SearchBar
				isFocused={focusId === 'search'}
				onSubmit={q => {
					setPath(`/search?q=${encodeURIComponent(q)}`);
					setFocusId('sidebar'); // return focus to sidebar
				}}
			/>

			<Box marginTop={1} flexDirection="column">
				<Box flexDirection="row">
					<Sidebar
						items={items}
						isFocused={focusId === 'sidebar'}
						onSelect={p => setPath(p)}
					/>
					<Box marginLeft={2} flexGrow={1} flexDirection="column">
						<Content path={path} isFocused={focusId === 'content'} />
					</Box>
				</Box>

				<Footer
					version={process.env.npm_package_version || 'dev'}
					stars={0}
					isFocused={focusId === 'footer'}
				/>
			</Box>
		</Box>
	);
}
