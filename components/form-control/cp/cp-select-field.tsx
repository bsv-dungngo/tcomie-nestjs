import { FormControl, InputLabel, Stack } from '@mui/material'
import { AutocompleteElement, FieldValues, Path, UseFormReturn } from 'react-hook-form-mui'

export type IOptionsType = {
  id: number
  value: string | number
  label: string
}

interface IInputFieldProps<V extends FieldValues> {
  form: UseFormReturn<V>
  name: Path<V>
  options: IOptionsType[]
  label?: string
  required?: boolean
  placeholder?: string
  validation?: any
  multiple?: boolean
  disabled?: boolean
  showCheckbox?: boolean
}

export const CPSelectField = <V extends FieldValues>(props: IInputFieldProps<V>) => {
  // Props
  const {
    name,
    label = '',
    options = [],
    required = false,
    placeholder = '',
    validation,
    multiple = false,
    form,
    disabled = false,
    showCheckbox = false,
  } = props

  return (
    <Stack width={'100%'} className="cp-base-select-field">
      <InputLabel>
        {label}
        <span className="required">{required ? '*' : ''}</span>
      </InputLabel>

      <FormControl disabled={disabled}>
        <AutocompleteElement
          matchId
          control={form.control}
          multiple={multiple}
          name={name}
          options={options}
          required={required}
          rules={validation}
          showCheckbox={showCheckbox}
          autocompleteProps={{ disabled: disabled }}
          textFieldProps={{
            placeholder: placeholder,
          }}
        />
      </FormControl>
    </Stack>
  )
}
