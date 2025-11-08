import { FadeIn, MainButton } from '@/components'
import { brand } from '@/components/colors/brand'
import { ChevronRight } from '@mui/icons-material'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { PriceBox } from '../../course/components/price-box'

interface IProps {
  delay: number
  bgcolor?: 'white' | 'gray'
}

export const LearnJapaneseItemType2 = ({ delay, bgcolor = 'gray' }: IProps) => {
  return (
    <Grid md={4} item>
      <Link href={'/hoc-tieng-nhat/1'}>
        <FadeIn yInitial={100} yAfter={0} delay={delay}>
          <Stack
            className="learn-japan-item-type2"
            bgcolor={bgcolor == 'white' ? '#fff' : brand.gray100}
          >
            <Box width={'100%'} height={'100%'} overflow={'hidden'} className="service-item">
              <Box className="service-item__image">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1466979783824-134c24c7cd86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXJuaW5nJTIwamFwYW58ZW58MHx8MHx8fDA%3D'
                  }
                  placeholder="blur"
                  layout="fill"
                  blurDataURL={
                    'https://images.unsplash.com/photo-1466979783824-134c24c7cd86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXJuaW5nJTIwamFwYW58ZW58MHx8MHx8fDA%3D'
                  }
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
                    endIcon={<ChevronRight fontSize="small" />}
                  >
                    XEM CHI TIẾT
                  </MainButton>
                </Box>
              </Box>
            </Box>

            <Stack spacing={1} p={2}>
              <Typography fontWeight={700} fontSize={'16px'}>
                Lớp Học Tiếng nhật cấp tốc 1
              </Typography>
              <Typography>
                Khóa học sẽ giúp bạn làm chủ công nghệ REACT của Facebook, giúp bạn có thể thiết kế
                những ...
              </Typography>

              <PriceBox />
            </Stack>
          </Stack>
        </FadeIn>
      </Link>
    </Grid>
  )
}
