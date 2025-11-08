import { FadeIn, MainButton } from '@/components'
import IconLearning from '@/components/icon/learning'
import { Box, Grid, Stack, Typography } from '@mui/material'

interface IProps {
  delay: number
}

export const LearnJapaneseItem = ({ delay }: IProps) => {
  return (
    <Grid md={6} item>
      <FadeIn yInitial={-100} yAfter={0} delay={delay}>
        <Stack spacing={1} direction={'row'} className="learn-japan-item">
          <Stack spacing={1}>
            <Typography fontWeight={700} fontSize={'16px'}>
              Lớp Học Tiếng nhật cấp tốc 1
            </Typography>
            <Typography>
              Khóa học sẽ giúp bạn làm chủ công nghệ REACT của Facebook, giúp bạn có thể thiết kế
              những trang WEB dựa trên nền tảng REACT một cách chuyên nghiệp nhất.
            </Typography>

            <Box pt={2}>
              <MainButton variant="contained" color="primary" roundedFull size="small">
                Xem chi tiết
              </MainButton>
            </Box>
          </Stack>

          <Box>
            <IconLearning />
          </Box>
        </Stack>
      </FadeIn>
    </Grid>
  )
}
