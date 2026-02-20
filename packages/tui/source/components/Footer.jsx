import React, {useState} from 'react';
import {Box, Text, useInput} from 'ink';
import open from 'open';
import Link from 'ink-link';
import {theme} from '../style/theme.js';

export default function Footer({
	version = 'dev',
	stars = 0,
	isFocused = false,
}) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const links = [
		{label: 'Greper', url: 'https://github.com/greper'},
		{label: 'WangLiang', url: 'https://github.com/wangliang181230'},
		{label: 'CuteOmega', url: 'https://github.com/cute-omega'},
		{label: 'Project Home', url: 'https://github.com/docmirror/dev-sidecar'},
	];

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

	return (
		<Box
			flexDirection="column"
			borderStyle="single"
			borderTop={true}
			borderBottom={false}
			borderLeft={false}
			borderRight={false}
			borderColor={isFocused ? theme.colors.accent : 'gray'}
			paddingTop={1}
			marginTop={1}
		>
			<Box justifyContent="space-between">
				<Text color={theme.colors.muted}>
					©2020-2026 docmirror.cn — {version}
				</Text>
				<Box>
					<Text color={theme.colors.muted}>Authors: </Text>
					{links.slice(0, 3).map((link, index) => (
						<Box key={link.label} marginRight={1}>
							{index > 0 && <Text>, </Text>}
							<Link url={link.url}>
								<Text
									backgroundColor={
										selectedIndex === index && isFocused
											? theme.colors.accent
											: undefined
									}
									color={
										selectedIndex === index && isFocused
											? theme.colors.background
											: theme.colors.text
									}
									bold={selectedIndex === index && isFocused}
									underline={selectedIndex === index && isFocused}
								>
									{link.label}
								</Text>
							</Link>
						</Box>
					))}
				</Box>
			</Box>
			<br></br>
			<Box marginTop={1} justifyContent="flex-end">
				<Text>如果它解决了你的问题，请不要吝啬你的star哟！点这里{'->'}</Text>
				<Box marginLeft={1}>
					<Link url={links[3].url}>
						<Text
							backgroundColor={
								selectedIndex === 3 && isFocused
									? theme.colors.accent
									: undefined
							}
							color={
								selectedIndex === 3 && isFocused
									? theme.colors.background
									: theme.colors.logo
							}
							bold={selectedIndex === 3 && isFocused}
							underline={selectedIndex === 3 && isFocused}
						>
							[Stars: {stars}]
						</Text>
					</Link>
				</Box>
			</Box>
			{isFocused && (
				<Text color="gray" dimColor>
					(Use Left/Right to select, Enter to open)
				</Text>
			)}
		</Box>
	);
}
