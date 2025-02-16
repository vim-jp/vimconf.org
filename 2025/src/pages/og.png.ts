import { ogImage } from '@/components/OgImage';

export async function GET() {
	const body = await ogImage();

	return new Response(body, {
		headers: {
			'content-type': 'image/png',
		},
	});
}
