import React from 'react';
import {Box, Text} from 'ink';
import {theme} from '../style/theme.js';

export default function HelpPage() {
	const helpItems = [
		{title: '帮助主页', path: 'doc/wiki/Home.md'},
		{title: '加速服务使用说明', path: 'doc/wiki/加速服务使用说明.md'},
		{title: '各平台安装说明', path: 'doc/wiki/各平台安装说明.md'},
		{
			title: '解决Github访问不了或速度很慢的问题',
			path: 'doc/wiki/解决Github访问不了或速度很慢的问题.md',
		},
	];

	return (
		<Box flexDirection="column">
			<Text bold color={theme.colors.primary}>
				帮助中心
			</Text>
			<Box marginTop={1} flexDirection="column">
				<Text>更多内容参考:</Text>
				{helpItems.map((item, index) => (
					<Box key={index} marginLeft={2}>
						<Text color={theme.colors.text}>- {item.title}: </Text>
						<Text color={theme.colors.muted}>{item.path}</Text>
					</Box>
				))}
			</Box>
			<Box marginTop={1}>
				<Text>问题反馈: </Text>
				<Text color={theme.colors.accent}>
					https://github.com/docmirror/dev-sidecar/issues
				</Text>
			</Box>
		</Box>
	);
}
