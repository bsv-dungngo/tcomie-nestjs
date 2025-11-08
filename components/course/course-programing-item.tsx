import { FadeIn, MainButton } from '@/components'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

interface IProps {
  item: any
  delay?: number
  handleClickCourse: (id: number) => void
}

export const CourseProgramingItem = ({ item, delay = 0, handleClickCourse }: IProps) => {
  return (
    <FadeIn yInitial={100} yAfter={0} delay={+delay} viewport={true}>
      <Stack>
        <Box width={'100%'} height={'100%'} overflow={'hidden'} className="service-item">
          <Box borderRadius={'10px'} className="service-item__image">
            <Image
              src={item.thumbnail}
              placeholder="blur"
              layout="fill"
              blurDataURL={item.thumbnail}
              objectFit="cover"
              alt=""
            />
          </Box>

          <Box className="service-item__content">
            <Box className="service-item__btn-detail">
              <MainButton
                size="small"
                variant="contained"
                color="primary"
                roundedFull
                handleClick={() => handleClickCourse(+item.id)}
              >
                XEM CHI TIẾT
              </MainButton>
            </Box>
          </Box>
        </Box>

        <Typography pt={1} fontSize={'1rem'} fontWeight={700} className="cursor--pointer">
          {item.title}
        </Typography>
      </Stack>
    </FadeIn>
  )
}
