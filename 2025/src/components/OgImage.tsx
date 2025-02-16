import { Buffer } from 'node:buffer';
import LogoWhite from '@/assets/logo-white.svg?raw';
import { MAIN_BACKGROUND_COLOR } from '@/consts';
import satori from 'satori';

import sharp from 'sharp';

/* convert string to base64 */
const LogoWhiteUrl = `data:image/svg+xml;base64,${Buffer.from(LogoWhite).toString('base64')}`;

export async function ogImage() {
	const svg = await satori(
		(
			<div
				style={{
					display: 'flex',
					position: 'relative',
					width: '100%',
					height: '100%',
					backgroundColor: MAIN_BACKGROUND_COLOR,
				}}
			>
				<img
					src={LogoWhiteUrl}
					style={{
						position: 'absolute',
						width: '100%',
						top: '100px',
					}}
				/>
			</div>
		),
		{
			width: 1600,
			height: 900,
			fonts: [],
		},
	);

	return sharp(Buffer.from(svg)).png().toBuffer();
}
