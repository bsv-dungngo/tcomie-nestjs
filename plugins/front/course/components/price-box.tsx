import {
  LibraryBooksOutlined,
  LocalLibraryOutlined,
  LocalOfferOutlined,
  PlayLessonOutlined,
} from '@mui/icons-material'
import { Divider, Stack, Typography } from '@mui/material'

export const PriceBox = () => {
  return (
    <>
      <Divider />

      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <LocalOfferOutlined color="info" fontSize="small" />
        <Typography fontWeight={600}>Học phí:</Typography>
        <Typography fontWeight={600} className="gradient-text">
          400.000đ
        </Typography>
        <Typography fontStyle={'italic'} sx={{ textDecoration: 'line-through' }} fontSize={'13px'}>
          299.000đ
        </Typography>
      </Stack>

      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <PlayLessonOutlined color="info" fontSize="small" />
        <Typography fontWeight={600}>Khai giảng:</Typography>
        <Typography fontWeight={600}>12/12/2024</Typography>
      </Stack>

      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <LibraryBooksOutlined color="info" fontSize="small" />
          <Typography fontWeight={600}>120 bài học</Typography>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <LocalLibraryOutlined color="info" fontSize="small" />
          <Typography fontWeight={600}>Online</Typography>
        </Stack>
      </Stack>
    </>
  )
}
