'use client';
import { FC } from 'react';
import scss from './UploadFile.module.scss';

export const UploadFile: FC = () => {
	return (
		<section className={scss.UploadFile}>
			<div className="container">
				<div className={scss.content}>UploadFile</div>
			</div>
		</section>
	);
};
