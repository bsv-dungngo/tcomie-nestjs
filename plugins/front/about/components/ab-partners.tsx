import { Box, Divider, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const AbPartnersContainer = () => {
  const partners = [
    'https://demo.edublink.co/wp-content/uploads/2023/05/brand-06.png',
    'https://demo.edublink.co/wp-content/uploads/2023/05/brand-01.png',
    'https://demo.edublink.co/wp-content/uploads/2023/05/brand-06.png',
  ]

  return (
    <Stack direction={'row'} justifyContent={'center'} py={12} spacing={4}>
      {partners.map((item, index) => (
        <React.Fragment key={index}>
          <Box width={'120px'} height={'120px'} position={'relative'}>
            <Image src={item} layout="fill" objectFit="contain" alt="" />
          </Box>

          {index != 2 && <Divider variant="middle" orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Stack>
  )
}
