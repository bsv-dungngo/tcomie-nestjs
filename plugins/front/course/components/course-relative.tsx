import { Swiper, SwiperSlide } from 'swiper/react'
import { courseList } from '../../main/components/data-demo'
import { HeadLabel } from './head-label'
// Import Swiper React components

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { CourseProgramingItem } from '@/components/course/course-programing-item'
import { Box } from '@mui/material'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export const CourseRelative = () => {
  return (
    <Box pb={6}>
      <HeadLabel title="Khoá học bạn có thể quan tâm" />

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="course-related-swiper"
      >
        {courseList.slice(0, 6).map((item, index) => (
          <SwiperSlide key={index}>
            <CourseProgramingItem
              item={item}
              handleClickCourse={() => {
                //
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
