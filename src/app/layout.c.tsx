'use client';
import { FC, ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';

interface ILayoutClientProps {
	children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
	return (
		<>
			<AntdRegistry>
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
						token: {
							colorPrimary: '#a855f7'
						}
					}}
				>
					{children}
				</ConfigProvider>
			</AntdRegistry>
		</>
	);
};

export default LayoutClient;
