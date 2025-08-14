import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/sessions/*.{png,jpg}",
);

export async function getSessionImageUrl(sessionId: string): Promise<string> {
  const customExtensions: Record<string, string> = {
    atusy: "jpg",
    teppei22: "jpg",
  };

  const suffix = customExtensions[sessionId] ?? "png";

  const imagePath = `/src/assets/sessions/${sessionId}.${suffix}`;
  if (images[imagePath]) {
    const imageModule = await images[imagePath]();
    return imageModule.default.src;
  }

  return "";
}
