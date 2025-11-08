import { FormControl, InputLabel, Stack } from '@mui/material'
import { AutocompleteElement, FieldValues, Path, UseFormReturn } from 'react-hook-form-mui'

/**
 * @property {number} id - The id of the option.
 * @property {string} value - This is the value that will be sent to the server when the user selects this option.
 * @property {string} label - The text that will be displayed in the dropdown
 */
export type IOptionsType = {
  id: number
  value: string | number
  label: string
}

/**
 * @property {string} name - The name of the input field.
 * @property {string} label - The label for the input field
 * @property {boolean} required - boolean - if the field is required or not
 * @property {string} placeholder - The placeholder text that will be displayed in the input field.
 * @property {IOptionsType[]} options - This is the array of options that will be displayed in the dropdown.
 */
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

export const SelectField = <V extends FieldValues>(props: IInputFieldProps<V>) => {
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
    <Stack width={'100%'}>
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
