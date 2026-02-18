'use client';
import { FC } from 'react';
import scss from './UploadFile.module.scss';
import { api } from '@/api';
import { Button, Upload, type UploadProps } from 'antd';
import toast from 'react-hot-toast';
import { ImageUp } from 'lucide-react';

export const UploadFile: FC = () => {
	const uploadProps: UploadProps = {
		name: 'file',
		customRequest: async ({ file, onSuccess, onError }) => {
			try {
				const formData = new FormData();
				formData.append('file', file);
				const response = await api.post('/upload/file', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				});
				onSuccess?.(response.data);
				toast.success('Файл успешно загружен!');
			} catch (e) {
				onError?.(e as Error);
				toast.error(`Не удалось загрузить файл: ${e}`);
			}
		},

		onChange: async (info) => {
			if (info.file.status === 'done') {
				await api.post('/images/create', {
					filePath: info.file.response.filePath
				});
			}
		}
	};

	return (
		<section className={scss.UploadFile}>
			<div className="container">
				<div className={scss.content}>
					<Upload {...uploadProps}>
						<Button icon={<ImageUp size={18} />}>Click to Upload</Button>
					</Upload>
				</div>
			</div>
		</section>
	);
};
