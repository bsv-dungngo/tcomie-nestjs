import { Box } from '@mui/material'
import { SwitchElement } from 'react-hook-form-mui'

interface IProps {
  name: string
  label?: string
}

export const SwitchField = (props: IProps) => {
  const { name, label } = props

  return (
    <Box>
      <SwitchElement label={label} name={name} />
    </Box>
  )
}
