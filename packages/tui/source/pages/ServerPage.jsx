import React from 'react';
import {Box, Text} from 'ink';
import {theme} from '../style/theme.js';

export default function ServerPage() {
	const stats = {
		uptime: 'Running',
		requests: 'N/A',
		errors: 0,
		memory: 'N/A',
	};

	return (
		<Box flexDirection="column">
			<Text bold color={theme.colors.primary}>
				服务状态
			</Text>
			<Box marginTop={1} flexDirection="column">
				<Text>
					状态: <Text color={theme.colors.accent}>{stats.uptime}</Text>
				</Text>
				<Text>
					请求: <Text color={theme.colors.muted}>{stats.requests}</Text>
				</Text>
				<Text>
					错误: <Text color={theme.colors.muted}>{stats.errors}</Text>
				</Text>
			</Box>
			<Box marginTop={1}>
				<Text color={theme.colors.muted}>
					(实时统计信息在 TUI 模式下暂不可用)
				</Text>
			</Box>
		</Box>
	);
}
