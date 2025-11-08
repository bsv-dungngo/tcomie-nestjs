import { MainButton } from '@/components'
import { brand } from '@/components/colors/brand'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const CoursePriceSale = () => {
  const router = useRouter()

  const handleRotingToRegister = () => {
    const courseId = router?.query?.id
    router.push('/register-course/?course_id=' + courseId)
  }

  return (
    <>
      <Stack>
        <Stack direction={'row'} alignItems={'flex-end'} spacing={1}>
          <Typography
            textAlign={'center'}
            fontSize={'2rem'}
            fontWeight={700}
            className="gradient-text"
          >
            28,000,000 đ
          </Typography>
          <Typography
            textAlign={'center'}
            fontWeight={600}
            fontStyle={'italic'}
            sx={{ textDecoration: 'line-through' }}
            color={brand.gray700}
            pb={'10px'}
          >
            2,000,000 đ
          </Typography>
        </Stack>

        <Typography>Giảm 75%</Typography>
        <Typography color={'red'}>
          <strong>5 giờ</strong> còn lại với mức giá này!
        </Typography>
      </Stack>

      <Box py={2}>
        <Link href={'/dang-ky-khoa-hoc'}>
          <MainButton variant="contained" color="primary" fullWidth roundedFull>
            ĐĂNG KÝ NGAY
          </MainButton>
        </Link>
      </Box>
    </>
  )
}
