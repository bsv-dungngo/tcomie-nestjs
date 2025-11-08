// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { brand } from '@/components/colors/brand'
import { FormatQuote } from '@mui/icons-material'
import { Avatar, Box, Card, Rating, Typography } from '@mui/material'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

export const TestimonialsSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: -28,
          },
        }}
        className="testimonial-card-swiper"
      >
        {[...Array(6)].map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="testimonial-card">
              <div className="testimonial-card-shape-01">
                <img src="/images/shapes/shape-04-2.png" alt="" />
              </div>
              <Box py={4} px={2}>
                <Box className="testimonial-card-avatar">
                  <Avatar
                    sx={{ height: '60px', width: '60px' }}
                    src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-03.png"
                  />

                  <div className="quote-icon">
                    <FormatQuote />
                  </div>
                </Box>

                <Typography pt={2} pb={4} fontWeight={600} color={brand.gray600}>
                  My daughter dreaded swimming lessons until we found Swim Academy and their
                  friendly, engaging staff. Now my daughter asks daily if it's swim lesson day.
                </Typography>

                <Rating defaultValue={5} />
                <Typography fontSize={'16px'} fontWeight={700}>
                  David
                </Typography>
                <Typography fontSize={'13px'} fontWeight={500} color={brand.gray600}>
                  Frontend
                </Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
