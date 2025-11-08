import { t } from '@/utils'

// PASSWORD
const passwordRules = {
  passwordMaxLength: 100,
  passwordMinLength: 6,
  passwordRequiredMsg: t('passwordRequiredValidation'),
  passwordMinLengthMsg: t('passwordMinLengthValidation'),
  passwordMaxLengthMsg: t('passwordMMaxLengthValidation'),

  confirmPasswordRequiredMsg: t('confirmPasswordRequiredValidation'), //
  confirmPasswordNotMatchMsg: t('confirmPasswordNotMatchValidation'), //
  confirmPasswordMinLengthMsg: t('confirmPasswordMinLengthValidation'), //
  confirmPasswordMaxLengthMsg: t('confirmPasswordMaxLengthValidation'), //
}

// Using form add user (client) NO 22
const nameRules = {
  nameMaxLength: 100,
  nameRequiredMsg: t('name_required'),
  nameMaxLengthMsg: t('name_max_length'),
}

// Using form add user (client)
const nameKanaUserRules = {
  nameKanaUserMaxLength: 100,
  nameKanaUserMaxLengthMsg: t('nameKanaUserMaxLengthValidation'),
  nameKanaUserRequiredMsg: t('nameKanaUserRequiredValidation'),
  nameKanaPatten: /^[ぁ-ん]+$/,
  nameKanaPattenMsg: t('clientNameKanaInvalid'),
}

// telNumberRules Validations rule NO 22
const telNumberRules = {
  telNumberMaxLength: 15,
  telNumberMaxLengthMsg: t('telNumberMaxLengthValidation'),
  telNumberRequiredMsg: t('telNumberRequiredValidation'),
  telNumberPattern: /^\d{3}-\d{4}-\d{4}$/,
  telNumberPatternMsg: t('telNumberFormatInvalidValidation'), // 999-9999-9999形式
}

// emailAddrRules Validations rule NO 22
const emailRules = {
  emailMaxLength: 254,
  emailMaxLengthMsg: t('email_max_length'),
  emailRequiredMsg: t('email_required'),
  emailInvalidMsg: t('email_invalid'),
  emailPattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

const onlyNumberPatten = /^\d+$/

const dateRules = {
  yearPatten: /^\d{4}$/,
  monthPatten: /^(1[0-2]|[1-9])$/,
  monthPatten2: /^(0[1-9]|1[0-2])$/,
  dayPatten: /^(3[01]|[12][0-9]|[1-9])$/,
  dayPatten2: /^(0[1-9]|1\d|2\d|3[01])$/,
}

export const validationRules = {
  ...passwordRules,
  ...nameRules,
  ...nameKanaUserRules,
  ...telNumberRules,
  ...emailRules,
  ...dateRules,
  onlyNumberPatten,
}
