import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
// Type-define 'en' as the master schema for the resource
type MessageSchema = typeof en;

function loadLocaleMessages(): any {
  // Dynamically import all JSON files in the locales folder
  const locales = import.meta.glob("@/locales/*.json", { eager: true });
  const messages: any = {};

  Object.keys(locales).forEach((key) => {
    // Extract the locale name from the file name
    const matched = key.match(/([A-Za-z0-9-_]+)\.json$/i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = (locales[key] as any).default || locales[key];
    }
  });
  return messages;
}

export const i18n = createI18n<[MessageSchema], "en" | "km">({
  locale: import.meta.env.VITE_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
  globalInjection: true,
  messages: loadLocaleMessages(),
});
