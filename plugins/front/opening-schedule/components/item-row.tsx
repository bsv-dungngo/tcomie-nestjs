import { brand } from '@/components/colors/brand'
import { Stack, Typography } from '@mui/material'

interface IProps {
  isGray?: boolean
  title: string
  description: string
}

export const ItemRow = ({ isGray, title, description }: IProps) => {
  return (
    <Stack direction={'row'} px={2} py={1} bgcolor={isGray ? brand.gray200 : ''}>
      <Typography fontWeight={700} pr={1} width={'110px'}>
        {title}
      </Typography>
      <Typography fontWeight={500}>{description}</Typography>
    </Stack>
  )
}
