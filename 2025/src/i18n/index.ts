export const LANGUAGES = ['ja', 'en'] as const;

type Lang = typeof LANGUAGES[number];

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.replace(import.meta.env.BASE_URL, '').split('/');
	if (lang in LANGUAGES) {
		return lang as Lang;
	}
	throw new Error(`Invalid language: ${lang}`);
}

export function useTranslate(lang: Lang): (...translations: string[]) => string {
	return (...translations: string[]) => translations[LANGUAGES.indexOf(lang)]; ;
}
