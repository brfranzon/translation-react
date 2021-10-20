import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lang_en from './translations/en.json';
import lang_de from './translations/de.json';
import lang_sp from './translations/sp.json';


const resources = {
   en:{translation: lang_en},
   de:{translation: lang_de},
   sp:{translation: lang_sp}
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation:{
    escapeValue: false
  }
});

export default i18n; 
