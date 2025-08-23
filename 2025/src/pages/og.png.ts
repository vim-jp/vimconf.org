import { ogImage } from "@/components/OgImage";

export async function GET() {
  const img = await ogImage();
  const body = new Uint8Array(img).buffer;

  return new Response(body, {
    headers: {
      "content-type": "image/png",
    },
  });
}
