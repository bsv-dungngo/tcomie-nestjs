import { Stars } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

export const CourseRequiredContent = () => {
  return (
    <>
      <Typography pt={4} fontSize={'1.1rem'} fontWeight={700}>
        Yêu cầu
      </Typography>

      <Stack spacing={1} pt={1}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Stars color="primary" fontSize="small" />{' '}
          <Typography fontWeight={500}>Hiểu biết về mô hình Client-Server</Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Stars color="primary" fontSize="small" />{' '}
          <Typography fontWeight={500}>Phân biệt rõ ràng được Front-end & Back-end</Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Stars color="primary" fontSize="small" />{' '}
          <Typography fontWeight={500}>Nắm chắc HTML, CSS, đã có sản phẩm tự tay làm</Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Stars color="primary" fontSize="small" />{' '}
          <Typography fontWeight={500}>Nắm chắc Javascript cơ bản và nâng cao</Typography>
        </Stack>
      </Stack>
    </>
  )
}
