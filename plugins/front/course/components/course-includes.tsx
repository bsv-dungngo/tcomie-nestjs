import { brand } from '@/components/colors/brand'
import {
  GroupAddOutlined,
  OndemandVideo,
  SimCardDownloadOutlined,
  WhereToVoteOutlined,
  WorkspacePremiumOutlined,
} from '@mui/icons-material'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'

export const CourseIncludes = () => {
  return (
    <Stack spacing={1}>
      <Stack border={2} borderRadius={'10px'} p={2} spacing={1} borderColor={brand.gray200}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <OndemandVideo fontSize="small" />
          <Stack>
            <Typography fontWeight={500}>Trạng thái</Typography>
            <Typography fontWeight={600} color={brand.blue}>
              Sắp diễn ra ...
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <GroupAddOutlined fontSize="small" />
            <Stack>
              <Typography fontWeight={500}>Học viên</Typography>
              <Typography fontWeight={600}>12 trong tổng số 20</Typography>
            </Stack>
          </Stack>

          <Box
            position={'relative'}
            display={'inline-flex'}
            border={1}
            borderRadius={'50%'}
            borderColor={brand.gray200}
          >
            <CircularProgress variant="determinate" value={80} color="info" />
            <Typography
              fontSize={'11px'}
              position={'absolute'}
              top={0}
              left={0}
              width={'100%'}
              height={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              lineHeight={'100%'}
              textAlign={'center'}
            >
              80%
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Typography fontWeight={700} fontSize={'16px'}>
        Khóa học này bao gồm:
      </Typography>

      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <OndemandVideo fontSize="small" />
        <Typography fontWeight={500}>1.5 tháng. Tuần 3 buổi, 1 buổi 1.5 tiếng</Typography>
      </Stack>

      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <SimCardDownloadOutlined fontSize="small" />
        <Typography fontWeight={500}>10 tài nguyên có thể tải xuống</Typography>
      </Stack>

      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <WhereToVoteOutlined fontSize="small" />
        <Typography fontWeight={500}>Trung Tâm Đào Tạo Tin Học Khoa Phạm</Typography>
      </Stack>

      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <WorkspacePremiumOutlined fontSize="small" />
        <Typography fontWeight={500}>Giấy chứng nhận hoàn thành</Typography>
      </Stack>
    </Stack>
  )
}
