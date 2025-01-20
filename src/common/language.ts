import { i18n } from "../i18n";
import type { ILanguageCode } from "../interfaces/ILanguage";

export function getLanguage(): ILanguageCode {
  const lang = localStorage.getItem("lang") as ILanguageCode | null;
  return lang ? lang : (i18n.global.locale as ILanguageCode);
}

export function setLanguage(lang: ILanguageCode) {
  i18n.global.locale = lang;
  localStorage.setItem("lang", lang);
}
