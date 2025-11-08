import { InputLabel, Stack } from '@mui/material'
import { FieldValues, PasswordElement } from 'react-hook-form-mui'

interface InputFieldProps<V extends FieldValues> {
  name: string
  type?: string
  label?: string
  required?: boolean
  validation?: any
  placeholder?: string
}

export const CPInputPasswordField = <V extends FieldValues>(props: InputFieldProps<V>) => {
  // Props
  const { name, type, validation, label = '', required = false, placeholder = '' } = props

  return (
    <Stack className="cp-input-field">
      <InputLabel>
        {label} <span className="required">{required ? '*' : ''}</span>
      </InputLabel>
      <PasswordElement
        name={name}
        fullWidth
        type={type}
        required={required}
        validation={validation}
        placeholder={placeholder}
      />
    </Stack>
  )
}
