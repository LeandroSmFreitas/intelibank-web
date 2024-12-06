import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import ptBr from "../i18n/pt-BR/pt-BR.json";
import enUs from "../i18n/en-US/en-US.json";

const resources = {
  pt: {
    translation: ptBr,
  },
  en: {
    translation: enUs
  }
};


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "pt-BR",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;