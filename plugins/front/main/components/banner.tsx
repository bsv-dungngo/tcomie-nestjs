// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

// import required modules
import { MainContainer } from '@/components'
import { t } from '@/utils'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'

interface IProps {
  isHiddenText?: boolean
}

export const Banner = ({ isHiddenText }: IProps) => {
  const banners = [
    {
      title: t('bannerTitleConsulting'),
      subTitle: t('bannerSubtitleConsulting'),
      img: '/images/banners/5.jpg',
      mobileUrl: '/images/banners/5.jpg',
    },
    {
      title: t('bannerTitleSystemDevelopment'),
      subTitle: t('bannerSubtitleSystemDevelopment'),
      img: '/images/banners/img1.png',
      mobileUrl: '/images/banners/img1.png',
    },
    {
      title: t('bannerTitleInfrastructure'),
      subTitle: t('bannerSubtitleInfrastructure'),
      img: '/images/banners/img2.png',
      mobileUrl: '/images/banners/img2.png',
    },
  ]

  return (
    <>
      <Box
        position={'relative'}
        maxHeight={'80vh'}
        display={{ xs: 'flex', lg: 'none' }}
        overflow={'hidden'}
      >
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="banner-swiper"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index} className="banner-swiper-slice">
              {!isHiddenText && (
                <Box className="banner-content">
                  <MainContainer>
                    <Typography
                      fontSize={{ xs: '14px', md: '22px' }}
                      textAlign={'center'}
                      color={'#fff'}
                      pb={'30px'}
                      maxWidth={'900px'}
                      mx={'auto'}
                      dangerouslySetInnerHTML={{ __html: t('aboutHeaderHome') }}
                    ></Typography>

                    <Typography
                      textAlign={'center'}
                      fontSize={{ xs: '16px', md: '22px' }}
                      pb={2}
                      fontWeight={700}
                      className="gradient-text"
                    >
                      Connecting – Creating New Value – Worth living
                    </Typography>

                    <Box
                      height={{ xs: '4px', md: '6px' }}
                      width={{ xs: '40px', md: '50px' }}
                      mx={'auto'}
                      bgcolor={'#fff'}
                      borderRadius={'20px'}
                      mb={'30px'}
                    ></Box>
                  </MainContainer>
                </Box>
              )}

              <Box
                height={'100%'}
                width={'100%'}
                position={'relative'}
                display={{ xs: 'none', md: 'flex' }}
              >
                <Image src={item.img} layout="fill" objectFit="cover" alt={''} />
              </Box>

              <Box
                height={'100%'}
                width={'100%'}
                position={'relative'}
                display={{ xs: 'flex', md: 'none' }}
              >
                <Image src={item.mobileUrl} layout="fill" objectFit="cover" alt={''} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}
