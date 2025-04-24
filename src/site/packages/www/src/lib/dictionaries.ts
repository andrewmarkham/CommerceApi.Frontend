import 'server-only'

export const i18n = {
    defaultLocale: "en",
    locales: ["en", "fr", "sv"],
  } as const;
  
export type Locale = (typeof i18n)["locales"][number];

const dictionaries = {
  en: () => import('../dictionaries/dictionary.en.json').then((module) => module.default),
  fr: () => import('../dictionaries/dictionary.fr.json').then((module) => module.default),
  sv: () => import('../dictionaries/dictionary.sv.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()