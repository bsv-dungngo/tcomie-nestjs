import { brand } from '@/components/colors/brand'
import { FiberManualRecord, OndemandVideoTwoTone } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

interface IProps {
  text: string
  handleClickPreview: () => void
}

export const ItemCheckPoint = ({ text, handleClickPreview }: IProps) => {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <FiberManualRecord sx={{ fontSize: '0.6rem', fill: brand.gray400 }} />
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Typography fontWeight={500} fontSize={'13px'}>
            {text}
          </Typography>

          <IconButton size="small" edge="end" onClick={handleClickPreview}>
            <OndemandVideoTwoTone fontSize="small" sx={{ fill: brand.gray600 }} />
          </IconButton>
        </Stack>
      </Stack>
    </>
  )
}
