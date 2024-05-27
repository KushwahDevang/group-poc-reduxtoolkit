// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
// Import your translation files
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
 
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });
 
export default i18n;