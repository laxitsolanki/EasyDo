import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations  from '../../ComumComponent/location/englissh/en.json';
import hiTranslations from '../../ComumComponent/location/hindi/hi.json';

const resources = {
    en: {
      translation: enTranslations
    },
    hi: {
      translation: hiTranslations
    }
  };
  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
