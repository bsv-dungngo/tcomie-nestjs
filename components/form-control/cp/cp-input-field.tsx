import { InputLabel, Stack } from '@mui/material'
import {
  ControllerProps,
  FieldValues,
  Path,
  TextFieldElement,
  UseFormReturn,
} from 'react-hook-form-mui'

interface InputFieldProps<V extends FieldValues> {
  form: UseFormReturn<V>
  name: Path<V>
  type?: 'text' | 'number' | 'email'
  label?: string
  required?: boolean
  rows?: number
  placeholder?: string
  validation?: ControllerProps['rules']
  disabled?: boolean
}

const CPInputField = <V extends FieldValues>(props: InputFieldProps<V>) => {
  const {
    name,
    type = 'text',
    label = '',
    required = false,
    placeholder = '',
    validation,
    rows = 1,
    disabled = false,
    form,
  } = props

  return (
    <Stack width={'100%'} className="cp-input-field">
      {label ? (
        <InputLabel>
          {label} <span className="required">{required ? '*' : ''}</span>
        </InputLabel>
      ) : null}

      <TextFieldElement
        name={name}
        control={form.control}
        multiline={rows > 1}
        minRows={rows}
        maxRows={rows}
        fullWidth
        type={type}
        validation={validation}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Stack>
  )
}

export default CPInputField
