import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'

interface IProps {
  title: string
  buttonLink: string
  id?: string
}

export const LearingHeader = ({ title, buttonLink, id = '' }: IProps) => {
  return (
    <Stack id={id} direction={'row'} pb={1} alignItems={'center'} justifyContent={'space-between'}>
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>

      <Box className="btn-link">
        Xem Lịch Khai Giảng
        <KeyboardArrowRight />
      </Box>
    </Stack>
  )
}
