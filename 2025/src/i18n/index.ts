export const LANGUAGES = ["ja", "en"] as const;

type Lang = (typeof LANGUAGES)[number];

export function useTranslate(
  lang: Lang,
): (...translations: string[]) => string {
  return (...translations: string[]) => translations[LANGUAGES.indexOf(lang)];
}
