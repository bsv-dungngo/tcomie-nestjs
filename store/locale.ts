import { LocaleValue } from '@/components'
import { atom } from 'recoil'

export const currentLocaleSelectedState = atom<LocaleValue>({
  key: 'currentLocaleSelectedState',
  default: {
    key: 'en',
    label: 'English(en)',
  },
})
