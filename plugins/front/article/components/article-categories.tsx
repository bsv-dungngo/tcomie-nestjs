import { brand } from '@/components/colors/brand'
import { Box, Stack, Typography } from '@mui/material'

export const ArticleCategories = () => {
  return (
    <Box p={2} mt={3} bgcolor={brand.white} borderRadius={'10px'}>
      <Typography fontSize={'18px'} fontWeight={700}>
        Categories
      </Typography>

      <Stack spacing={1} pt={2}>
        {[...Array(4)].map((item, index) => (
          <Stack key={index} direction={'row'} justifyContent={'space-between'}>
            <Typography className="button-link" fontWeight={500}>
              Computer Engineering
            </Typography>
            <Typography>(2)</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
