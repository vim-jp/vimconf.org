import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/sessions/*.{png,jpg}",
);

export async function getSessionImageUrl(sessionId: string): Promise<string> {
  // ファイル名とsession_idのマッピング
  const imageFiles: Record<string, string> = {
    atusy: "atusy.jpg",
    hrsh7th: "hrsh7th.png",
    kawarimidoll: "kawarimidoll.png",
    kuuote: "kuuote.png",
    Λlisue: "lambdalisue.png",
    mikoto2000: "mikoto2000.png",
    rbtnn: "rbtnn.jpg",
    satoru_kitaguchi_register: "satorunooshie.png",
    satoru_kitaguchi_dot: "satorunooshie.png",
    teppei22: "teppei22.jpg",
  };

  const fileName = imageFiles[sessionId];
  if (!fileName) {
    return "";
  }

  const imagePath = `/src/assets/sessions/${fileName}`;
  if (images[imagePath]) {
    const imageModule = await images[imagePath]();
    return imageModule.default.src;
  }

  return "";
}
