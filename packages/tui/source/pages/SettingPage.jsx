import React from 'react';
import {Box, Text} from 'ink';
import {theme} from '../style/theme.js';

export default function SettingPage() {
	const settings = [
		{key: 'Auto Start', value: 'Enabled'},
		{key: 'Theme', value: 'Default'},
		{key: 'Log Level', value: 'Info'},
	];

	return (
		<Box flexDirection="column">
			<Text bold color={theme.colors.primary}>
				设置
			</Text>
			<Box marginTop={1} flexDirection="column">
				{settings.map(s => (
					<Text key={s.key}>
						{s.key}: <Text color={theme.colors.accent}>{s.value}</Text>
					</Text>
				))}
			</Box>
			<Box marginTop={1}>
				<Text color={theme.colors.muted}>
					更多设置请编辑 ~/user_config.json5 文件
				</Text>
			</Box>
		</Box>
	);
}
