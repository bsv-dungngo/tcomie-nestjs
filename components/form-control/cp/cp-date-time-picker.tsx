import { InputLabel, Stack } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Dayjs } from 'dayjs'
import { DatePickerElement, FieldValues, Path, UseFormReturn } from 'react-hook-form-mui'

interface IProps<V extends FieldValues> {
  name: Path<V>
  formContext: UseFormReturn<V>
  label?: string
  required?: boolean
  disabled?: boolean
  minDate?: Dayjs | null
}

export const CPDateTimePicker = <V extends FieldValues>({
  name,
  formContext,
  label,
  required,
  disabled,
  minDate,
}: IProps<V>) => {
  return (
    <Stack className="cp-date-picker">
      {label && (
        <InputLabel>
          {label}
          <span className="required">{required ? '*' : ''}</span>
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePickerElement
          name={name}
          control={formContext.control}
          isDate
          required={required}
          disabled={disabled}
          minDate={minDate}
          inputFormat="dd/MM/yyyy"
        />
      </LocalizationProvider>
    </Stack>
  )
}
