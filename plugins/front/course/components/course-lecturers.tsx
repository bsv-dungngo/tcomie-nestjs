import { brand } from '@/components/colors/brand'
import { People, PlayCircle, Star, WorkspacePremium } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export const CourseLecturers = () => {
  return (
    <>
      <Typography pt={4} fontSize={'1.1rem'} fontWeight={700} pb={2}>
        Giảng viên
      </Typography>

      <Stack direction={'row'} spacing={3}>
        <Box
          height={'140px'}
          width={'140px'}
          position={'relative'}
          borderRadius={'50%'}
          overflow={'hidden'}
          border={2}
          borderColor={brand.gray400}
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D'
            }
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Stack spacing={1}>
          <Typography fontWeight={600}>Nguyễn Văn B</Typography>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Star fontSize="small" />
            <Typography fontWeight={600}>4,9 xếp hạng giảng viên</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <WorkspacePremium fontSize="small" />
            <Typography fontWeight={600}>451 đánh giá</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <People fontSize="small" />
            <Typography fontWeight={600}>1651 học viên</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <PlayCircle fontSize="small" />
            <Typography fontWeight={600}>1 khóa học</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography fontWeight={500} pt={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five{' '}
        <br />
        <br />
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Typography>
    </>
  )
}
