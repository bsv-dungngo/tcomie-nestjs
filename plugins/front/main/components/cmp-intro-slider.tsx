import { Box } from '@mui/material'
import { Swiper } from 'swiper/react'
// Import Swiper React components
import { SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export const CmpIntroSlider = () => {
  const banners = ['/images/banners/5.jpg', '/images/banners/img1.png', '/images/banners/img2.png']
  return (
    <Box
      position={'absolute'}
      right={0}
      width={'50%'}
      height={'100%'}
      display={{ xs: 'none', lg: 'flex' }}
    >
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        className="why-choose-us-swiper"
      >
        <div className="why-choose-us-swiper-shape-01"></div>
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} layout="fill" alt="" objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
