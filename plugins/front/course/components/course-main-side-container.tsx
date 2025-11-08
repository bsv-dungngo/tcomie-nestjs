import { Grid, Typography } from '@mui/material'
import { CourseContent } from './course-content'
import { CourseLearnContent } from './course-learn-content'
import { CourseLecturers } from './course-lecturers'
import { CourseRequiredContent } from './course-required-content'
import { CourseSubSideContainer } from './course-sub-side-container'

export const CourseMainSideContainer = () => {
  return (
    <Grid item xs={12} lg={8} mt={'-20px'}>
      <Typography fontSize={{ xs: '1.3rem', md: '2rem' }} fontWeight={700}>
        Xây Dựng Website với ReactJS
      </Typography>
      <Typography fontWeight={500} pt={1}>
        Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết
        các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống
        Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa
        học này.
      </Typography>

      <CourseSubSideContainer display={{ xs: 'flex', lg: 'none' }} />

      <CourseLearnContent courseLearnItems={items} />

      <CourseContent chapters={chapters} />

      <CourseRequiredContent />

      <CourseLecturers />
    </Grid>
  )
}

const items = [
  {
    title: 'Hiểu về khái niệm SPA/MPA',
  },
  {
    title: 'Hiểu cách ReactJS hoạt động',
  },
  {
    title: 'Biết cách tối ưu hiệu năng ứng dụng',
  },
  {
    title: 'Hiểu rõ ràng Redux workflow',
  },
  {
    title: 'Biết sử dụng redux-thunk middleware',
  },
  {
    title: 'Triển khai dự án React ra Internet',
  },
  {
    title: 'Biết cách Deploy lên Github/Gitlab page',
  },
  {
    title: 'Hiểu về khái niệm hooks',
  },
  {
    title: 'Hiểu về function/class component',
  },
  {
    title: 'Thành thạo làm việc với RESTful API',
  },
  {
    title: 'Thành thạo sử dụng Redux vào dự án',
  },
  {
    title: 'Xây dựng sản phẩm thực tế (clone Tiktok)',
  },
  {
    title: 'Đủ hành trang tự tin apply đi xin việc',
  },
  {
    title: 'Nhận chứng chỉ khóa học do F8 cấp',
  },
]

const chapters = [
  {
    title: 'Giới thiệu',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'Ôn lại ES6+',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
  {
    title: 'React, ReactDom',
    mainCourse: [
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
      {
        title: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },
    ],
  },
]
