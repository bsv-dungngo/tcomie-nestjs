import { MainButton } from '@/components'
import { brand } from '@/components/colors/brand'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { courseList } from '../../main/components/data-demo'
import { ItemRow } from './item-row'

export const ListCourseSchedule = () => {
  const handleRotingResiter = (id: number) => {
    window.location.href = `/register-course/?course_id=${id}`
  }

  return (
    <Grid container spacing={3} pb={6} pt={2}>
      {courseList.map((ite, index) => (
        <Grid key={index} item md={4}>
          <Card elevation={0} className="open-schedule-item">
            <Box height={'200px'} width={'100%'} position={'relative'}>
              <Image
                src={ite.thumbnail}
                alt=""
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={ite.thumbnail}
              />
            </Box>

            <Typography
              fontSize={'14px'}
              fontWeight={700}
              bgcolor={brand.dark}
              color={brand.primary}
              px={2}
              py={1}
            >
              KHOÁ HỌC LẬP TRÌNH GAME BLOCKCHAIN
            </Typography>

            <Stack>
              <ItemRow title="Khai giảng: " description="29-12-2023" isGray />
              <ItemRow title="Thời gian: " description="Thứ hai, tư, sáu 19:45 - 21:45" />
              <ItemRow title="Thời lượng:" description="02 tháng" isGray />
              <ItemRow title="Học phí:" description="28,000,000" />
              <ItemRow title="Địa điểm học:" description="Tại FLIT" isGray />
              <Typography px={2} py={1} fontSize={'12px'} fontWeight={600}>
                Khóa học sẽ giúp bạn làm chủ công nghệ REACT của Facebook, giúp bạn có thể thiết kế
                những trang WEB dựa trên nền tảng REACT một cách chuyên nghiệp nhất.
              </Typography>

              <Box p={2} width={'100%'}>
                <MainButton
                  fullWidth
                  variant="contained"
                  roundedFull
                  handleClick={() => handleRotingResiter(+ite.id)}
                >
                  ĐĂNG KÝ KHOÁ HỌC
                </MainButton>
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
