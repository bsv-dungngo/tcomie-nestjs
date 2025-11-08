import { brand } from '@/components/colors/brand'
import { MainTag } from '@/components/tag'
import { AccessTimeOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

export const StatusBlock = () => {
  return (
    <Stack direction={'row'} py={2} spacing={1.5} alignItems={'center'}>
      <MainTag />
      <Stack direction={'row'} alignItems={'center'} spacing={0.7}>
        <AccessTimeOutlined sx={{ fill: brand.gray500, fontSize: '1rem' }} />
        <Typography fontWeight={600} fontSize={'10px'} color={brand.gray600} lineHeight={'100%'}>
          1 Giờ trước
        </Typography>
      </Stack>
    </Stack>
  )
}
