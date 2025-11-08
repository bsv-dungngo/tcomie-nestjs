import { Box, CircularProgress } from '@mui/material'

export const ContentLoading = () => {
  return (
    <Box height={'100vh'} width={'100%'} display={'flex'} justifyContent={'center'}>
      <CircularProgress sx={{ height: '24px !important', width: '24px !important' }} color="info" />
    </Box>
  )
}
