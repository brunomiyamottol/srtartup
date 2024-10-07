const languages = {
  ["en"]: "en-US",
  ["es"]: "es-MX",
  ["pt"]: "pt-BR",
};
const defaultLanguage = "en-US";

export function NavigatorLanguageFormat(language = "") {
  if (!language) return defaultLanguage;

  const shortCurrentLanguage = language.substring(0, 2).toLowerCase();

  return languages[shortCurrentLanguage] ?? defaultLanguage;
}
