import { brand } from '@/components/colors/brand'
import { Box, Typography } from '@mui/material'

export const ArticleTags = () => {
  return (
    <Box p={2} mt={3} borderRadius={'10px'} bgcolor={brand.white}>
      <Typography fontSize={'18px'} fontWeight={700}>
        Categories
      </Typography>

      <Box display={'flex'} flexWrap={'wrap'} gap={1} mt={2}>
        {[...Array(4)].map((item, index) => (
          <Typography key={index} className="button-tag" fontWeight={500}>
            Tin công nghệ
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
