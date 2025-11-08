import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps {
  image?: string
}

export const PageBanner = ({ image }: IProps) => {
  const banners = [
    '/images/banner-about.jpg',
    '/images/banner-about-2.jpg',
    '/images/banner-about-3.jpg',
  ]

  const currentBanner = banners[Math.floor(Math.random() * banners.length)]

  return (
    <Box position={'relative'} height={{ xs: '200px', md: '400px' }} width={'100%'}>
      <Image
        src={image ?? currentBanner}
        layout="fill"
        alt=""
        objectFit="cover"
        style={{ borderRadius: 8 }}
      />
    </Box>
  )
}
