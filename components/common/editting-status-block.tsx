import { Circle } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { brand } from '../colors/brand'

interface IProps {
  isPuplised: boolean
}

export default React.memo(({ isPuplised }: IProps) => {
  return (
    <Box
      border={1}
      borderColor={brand.gray300}
      p={2}
      borderRadius={'4px'}
      display={'flex'}
      alignItems={'center'}
      gap={1}
    >
      <Circle sx={{ fontSize: '8px', color: isPuplised ? brand.green : brand.blue }} />
      <Typography fontWeight={'600'} color={isPuplised ? brand.green : brand.blue}>
        {isPuplised ? 'Editing puplished version' : 'Editing draft version'}
      </Typography>
    </Box>
  )
})
