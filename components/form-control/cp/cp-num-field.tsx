import { InputLabel, Stack, TextField } from '@mui/material'
import React from 'react'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form-mui'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

interface IInputFieldProps<V extends FieldValues> {
  form: UseFormReturn<V>
  name: Path<V>
  label?: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
}

export const CPNumField = <V extends FieldValues>(props: IInputFieldProps<V>) => {
  // Props
  const { name, label = '', required = false, placeholder = '', form, disabled = false } = props

  return (
    <Stack width={'100%'}>
      <InputLabel>
        {label}
        <span className="required">{required ? '*' : ''}</span>
      </InputLabel>

      <Controller
        name={name}
        control={form.control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              className="cp-base-input-field"
              color="info"
              placeholder={placeholder}
              disabled={disabled}
              InputProps={{
                inputComponent: NumericFormatCustom as any,
              }}
            />
          )
        }}
      />
    </Stack>
  )
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        thousandSeparator
        valueIsNumericString
      />
    )
  }
)
