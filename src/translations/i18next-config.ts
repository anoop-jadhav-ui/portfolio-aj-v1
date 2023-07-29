import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { deTranslation, enTranslation, hiTranslation } from "./translations";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ["en"],
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      hi: { translation: hiTranslation },
    },
  });

export default i18n;
