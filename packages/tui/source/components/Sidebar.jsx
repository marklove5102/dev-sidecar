import React from 'react';
import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';
import {theme} from '../style/theme.js';

export default function Sidebar({items = [], onSelect, isFocused = true}) {
	const handleSelect = item => {
		onSelect && onSelect(item.value);
	};

	return (
		<Box
			flexDirection="column"
			width={theme.spacing.sidebarWidth}
			paddingX={1}
			borderStyle="single"
			borderRight={true}
			borderLeft={false}
			borderTop={false}
			borderBottom={false}
			borderColor={isFocused ? theme.colors.accent : 'gray'}
		>
			<Box
				marginBottom={1}
				borderStyle="single"
				borderBottom={true}
				borderTop={false}
				borderLeft={false}
				borderRight={false}
				borderColor={isFocused ? theme.colors.accent : 'gray'}
				{...(isFocused ? {backgroundColor: theme.colors.accent} : {})}
			>
				<Text color={theme.colors.logo} bold>
					Dev Sidecar - 开发者边车
				</Text>
			</Box>
			<SelectInput
				items={items}
				onSelect={handleSelect}
				isFocused={isFocused}
			/>
		</Box>
	);
}
