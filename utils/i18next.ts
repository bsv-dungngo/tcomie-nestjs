import aboutVI from '@/locales/vi/about.json'
import contactVI from '@/locales/vi/contact.json'
import homeVI from '@/locales/vi/home.json'
import linkVI from '@/locales/vi/link.json'
import menuVI from '@/locales/vi/menu.json'
import serviceVI from '@/locales/vi/service.json'
import teamVI from '@/locales/vi/team.json'
import validationVI from '@/locales/vi/validation.json'

import aboutEN from '@/locales/en/about.json'
import contactEN from '@/locales/en/contact.json'
import homeEn from '@/locales/en/home.json'
import linkEn from '@/locales/en/link.json'
import menuEn from '@/locales/en/menu.json'
import messageEn from '@/locales/en/message.json'
import teamEN from '@/locales/en/team.json'
import validationEn from '@/locales/en/validation.json'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// the translations
const resources = {
  vi: {
    translation: {
      ...menuVI,
      ...homeVI,
      ...aboutVI,
      ...contactVI,
      ...validationVI,
      ...serviceVI,
      ...linkVI,
      ...messageEn,
      ...teamVI,
    },
  },
  en: {
    translation: {
      ...menuEn,
      ...homeEn,
      ...linkEn,
      ...validationEn,
      ...messageEn,
      ...teamEN,
      ...aboutEN,
      ...contactEN,
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    fallbackLng: 'vi', // use en if detected lng is not available
    // order and from where user language should be detected
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    // keySeparator: false, // we do not use keys in form messages.welcome
    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '@/public/locales/{{lng}}/translation.json',
    },
  })

export default i18n
