import { dataTableParamsState } from '@/store/param-data'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import numeral from 'numeral'
import { getRecoil } from 'recoil-nexus'
import i18n from './i18next'
/**
 * It takes a number and returns a string with the number padded with zeros
 * @param {number | undefined} number - The number to pad.
 * @param [numZero=4] - The number of zeros to pad the number with.
 * @returns A function that takes a number and a number of zeros and returns a string.
 */
export const padNumber = (number: number | undefined, numZero = 4) => {
  return number ? number.toString().padStart(numZero, '0') : ''
}

export const formatPrice = (price: number) => {
  return numeral(price).format('0,0')
}

/**
 * If the string is less than the max length, return the string, otherwise return the string up to the
 * last space before the max length, plus the suffix
 * @param {string} str - The string to truncate.
 * @param {number} max - The maximum length of the string.
 * @param [suffix=...] - The string to append to the end of the truncated string.
 */
export const truncateWord = (str: string, max: number, suffix = '...') =>
  str.length < max
    ? str
    : `${str.substring(0, str.substring(0, max - suffix.length).lastIndexOf(' '))}${suffix}`

/**
 * It returns the translation of the given key, or an empty string if the translation is not found
 * @param {string} key - The key of the translation you want to use.
 * @returns The translation of the key.
 */
export const t = (key: string) => {
  return i18n.t(key) ?? ''
}

/**
 * It takes a string as an argument and returns the string if it's truthy, otherwise it returns a
 * default error message
 * @param {any} str - any - the error message to be displayed
 * @returns A function that takes a string and returns a string.
 */
export const getErrorMessage = (str: any) => {
  if (str) return str
  return t('errorDefault')
}

/**
 * It takes a date string and a format string as parameters, and returns a formatted date string
 * @param {string} date - The date you want to format.
 * @param [format=DD/MM/YYYY HH:mm:ss] - The format of the date.
 * @returns A function that takes two parameters, date and format.
 */
export const formatDate = (date: string, format = 'DD/MM/YYYY') => {
  return dayjs(date).format(format)
}

// Format week day
class CustomString extends String {
  charAt(_: number): string {
    return this.valueOf()
  }
}

const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
const customWeekDays = weekDays.map((day) => new CustomString(day) as string)

export class CustomDateAdapter extends AdapterDateFns {
  getWeekdays = (): string[] => customWeekDays
}

export const phoneNumberAutoFormat = (phoneNumber: string): string => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, '')

  if (number.length < 4) return number
  if (number.length < 8) return number.replace(/(\d{3})(\d{1,4})/, '$1-$2')
  return number.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3')
}

export const translateText = (textVi: string, textEn: string) => {
  const currentLang = i18n.language

  return currentLang == 'vi' ? textVi : textEn
}

export const calcIndexDataTable = (index: number) => {
  const params = getRecoil(dataTableParamsState)

  return (params.page - 1) * params.size + index + 1
}
