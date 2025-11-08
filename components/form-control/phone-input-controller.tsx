import { phoneNumberAutoFormat } from '@/utils'
import { ErrorMessage } from '@hookform/error-message'
import { FormControl, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Controller, UseFormReturn } from 'react-hook-form'

type IProps = {
  name: string
  formContext: UseFormReturn<any>
  placeholder?: string
  label?: string
  maxWidth?: string
  required?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const PhoneInputController = (props: IProps) => {
  const { name, formContext, placeholder = '', size = 'large', required, label } = props

  const {
    formState: { errors },
    control,
  } = formContext

  const onChange = (e: any, field: any) => {
    const targetValue = phoneNumberAutoFormat(e.target.value)
    if (targetValue.length >= 14) {
      return
    }
    field.onChange(targetValue)
  }

  return (
    <Stack>
      {label ? (
        <InputLabel>
          {label} <span className="required">{required ? '※' : ''}</span>
        </InputLabel>
      ) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <OutlinedInput
              {...field}
              type="tel"
              onChange={(e) => onChange(e, field)}
              id="formatted-phone-mask-input"
              placeholder={placeholder}
              fullWidth
            />
          </FormControl>
        )}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography pt={0.3} pl={'12px'} fontSize={'11px'} color={red[800]} fontWeight={300}>
            {message}
          </Typography>
        )}
      />
    </Stack>
  )
}
