import * as yup from 'yup'
import { t, translateText } from './helpers'

export class Validation {
  static required(label: string) {
    return yup.string().required(label + t('requiredText'))
  }

  // Email
  static email(label: string) {
    const patten = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    const requiredMsg = label + t('requiredText')
    const pattenMsg = label + t('invalidText')
    const maxLengthMsg = label + translateText('は254桁以下にしてください。', 'max 245 characters')

    return yup.string().required(requiredMsg).matches(patten, pattenMsg).max(255, maxLengthMsg)
  }

  // Contact name
  static fullName(label: string, maxLength?: number) {
    const maxLengthMsg =
      label + translateText(`は${maxLength}桁以下にしてください。`, `max ${maxLength} characters`)
    const requiredMsg = label + t('requiredText')

    let contactNameValidation = yup.string().required(requiredMsg)

    if (maxLength && maxLength > 0) {
      contactNameValidation = contactNameValidation.max(maxLength, maxLengthMsg)
    }

    return contactNameValidation
  }

  static max(label: string, max: number) {
    return yup
      .string()
      .max(max, translateText(`は${max}桁以下にしてください。`, `${label} is ${max} characters`))
  }

  static phone(label: string) {
    return yup
      .string()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? null : value))
      .matches(
        /^\d{3}-\d{4}-\d{4}$/,
        translateText(
          `${label}「999-9999-9999」形式にしてください。`,
          `${label} Incorrect format 「999-9999-9999」`
        )
      )
  }
}

export class ValidationCP {
  static required(label: string) {
    return yup.string().required(label + ' is required')
  }

  static maxLength(label: string, max: number) {
    return (yup as any).max(max, `${label} tối đa ${max} ký tự`)
  }
}
