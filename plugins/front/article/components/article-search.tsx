import { brand } from '@/components/colors/brand'
import { Search } from '@mui/icons-material'
import { Box, IconButton, InputBase } from '@mui/material'

export const ArticleSearch = () => {
  return (
    <>
      <Box
        border={1}
        borderColor={brand.gray300}
        width={'100%'}
        height={'38px'}
        pl={2}
        borderRadius={'10px'}
        bgcolor={brand.white}
        boxShadow={brand.boxShadow}
        display={'flex'}
      >
        <InputBase sx={{ height: '100%', width: '100%' }} placeholder="Tìm kiếm..." />

        <IconButton size="small">
          <Search />
        </IconButton>
      </Box>
    </>
  )
}
