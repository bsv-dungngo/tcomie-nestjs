import { ErrorMessage } from '@hookform/error-message'
import { Typography } from '@mui/material'
import { FieldErrors } from 'react-hook-form'

interface IProps {
  errors: FieldErrors<any>
  name: string
}

export const HelperError = ({ errors, name }: IProps) => {
  return (
    <>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography pt={0.3} pb={1} fontSize={'11px'} color={'#d32f2f'} fontWeight={400}>
            {message}
          </Typography>
        )}
      />
    </>
  )
}
