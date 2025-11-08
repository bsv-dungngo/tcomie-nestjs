import MainModal from '@/components/modal/MainModal'
import { PlayCircle } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

export const CourseVideoPreview = () => {
  const [isOpenPreview, setIsOpenPreview] = useState(false)

  const handleToggle = () => {
    setIsOpenPreview(!isOpenPreview)
  }

  return (
    <>
      <Box
        mt={{ xs: 2, lg: 0 }}
        height={'240px'}
        position={'relative'}
        width={'100%'}
        maxWidth={{ xs: '100%', sm: '100%', lg: '100%' }}
        borderRadius={'10px'}
        overflow={'hidden'}
        className="cursor--pointer"
        onClick={handleToggle}
      >
        <Image
          src={'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'}
          alt=""
          layout="fill"
          objectFit="cover"
        />

        <Box
          position={'absolute'}
          top={0}
          left={0}
          zIndex={2}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          height={'100%'}
        >
          <PlayCircle sx={{ fill: '#fff', fontSize: '3rem' }} />
        </Box>

        <Typography
          position={'absolute'}
          bottom={0}
          color={'#fff'}
          fontWeight={700}
          display={'flex'}
          justifyContent={'center'}
          width={'100%'}
          fontSize={'20px'}
          paddingBottom={'24px'}
        >
          Xem giới thiệu khoá học
        </Typography>
      </Box>

      <MainModal
        open={isOpenPreview}
        onClose={handleToggle}
        maxWidth="md"
        title="Giới thiệu khóa học"
      >
        <Typography fontWeight={700} fontSize={'16px'} pb={3}>
          Responsive Với Grid System
        </Typography>
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/j942wKiXFu8?si=BD-XnrkgbLNpFF5K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MainModal>
    </>
  )
}
