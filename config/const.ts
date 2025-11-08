import { LocaleValue } from '@/components'
import { currentLocaleSelectedState } from '@/store/locale'
import { OptionsType } from '@/types'
import i18n from '@/utils/i18next'
import { setRecoil } from 'recoil-nexus'

export const LOCALES_KEY = ['vi', 'en']

export type LocaleKeyType = 'vi' | 'en'

export const DEFAULT_LOCALE_KEY = 'en'

export const BLOG_TYPES: OptionsType[] = [
  { label: 'Event', id: 'event', value: 'event' },
  { label: 'News', id: 'news', value: 'news' },
]

export const COURSE_TYPES: OptionsType[] = [
  { label: 'Technology', id: 'technology', value: 'technology' },
  { label: 'Japanese', id: 'japanese', value: 'japanese' },
]

export const LOCALES: LocaleValue[] = [
  { label: 'Vietnamese', key: 'vi' },
  { label: 'English', key: 'en' },
]

export const STATUS: OptionsType[] = [
  { label: 'Published', id: 1, value: 1 },
  { label: 'Unpublished', id: 2, value: 2 },
]

export const STATUS_COURSE: OptionsType[] = [
  { label: 'Upcoming', id: 1, value: 1 },
  { label: 'Happenning', id: 2, value: 2 },
  { label: 'Completed', id: 3, value: 3 },
]

export const DateViewFormat = 'MM/DD/YYYY'

export const renderContentByLocaleCP = (text_vi: string, text_en: string) => {
  const currentLocale = localStorage.getItem('locale') ?? 'en'
  return currentLocale == 'vi' ? text_vi : text_en
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const renderTextByLocale = <FieldValues extends Record<any, any>>(
  object: FieldValues,
  attr: string
) => {
  const currentLocale = i18n.language ?? 'en'
  return object[`${attr}_${currentLocale}`]
}

export const renderTextByLocaleCP = <FieldValues extends Record<any, any>>(
  object: FieldValues,
  attr: string
) => {
  const currentLocale = localStorage.getItem('locale') ?? 'en'
  return object[`${attr}_${currentLocale}`]
}

export const renderFirstLetterUppercase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const onCheckError = (error: any) => {
  const keys = Object.keys(error)

  if (keys.some((key) => key.includes('vi'))) {
    const localeObj = LOCALES.find((item) => item.key === 'vi')
    if (localeObj) {
      setRecoil(currentLocaleSelectedState, localeObj)
    }

    return
  }

  if (keys.some((key) => key.includes('en'))) {
    const localeObj = LOCALES.find((item) => item.key == 'en')
    if (localeObj) {
      setRecoil(currentLocaleSelectedState, localeObj)
    }
  }
}
