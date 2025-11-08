import { Box } from '@mui/material'
import { brand } from '../colors/brand'

interface IProps {
  color?: string
  width?: string
}

export const TitleDivider = ({ color, width }: IProps) => {
  return (
    <Box
      height={'4px'}
      width={width ? width : '50px'}
      borderRadius={'10px'}
      bgcolor={color ? color : brand.gray200}
    ></Box>
  )
}
