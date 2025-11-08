import { OptionsType } from '@/types'
import { Autocomplete, TextField } from '@mui/material'
import { useId } from 'react'

interface IProps {
  width?: string
  placeholder?: string
  options: OptionsType[]
  isDefaultValue?: boolean
  onChange: () => void
}

export const CPBaseSelectField = ({
  width = '120px',
  placeholder,
  options,
  isDefaultValue,
  onChange,
}: IProps) => {
  const id = useId()

  return (
    <Autocomplete
      disablePortal
      className="cp-base-select-field"
      id={`combo-box-${id}`}
      options={options}
      sx={{ width }}
      onChange={onChange}
      defaultValue={isDefaultValue ? options[0] : null}
      renderInput={(params) => <TextField {...params} color="info" placeholder={placeholder} />}
    />
  )
}
