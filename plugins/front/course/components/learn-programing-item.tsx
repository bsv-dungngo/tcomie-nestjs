import { FadeIn, MainButton } from '@/components'
import { renderTextByLocale } from '@/config/const'
import { ChevronRight } from '@mui/icons-material'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  item: any
  size: number
  delay: string
}

export const LearnProgramingItem = ({ item, size, delay }: IProps) => {
  return (
    <Grid item xs={12} sm={6} md={size}>
      <Link href={`${t('linkFrProject')}${renderTextByLocale(item, 'slug')}`}>
        <FadeIn yInitial={100} yAfter={0} delay={+delay} viewport={true}>
          <Stack className="service-item-wrapper">
            <Box width={'100%'} height={'100%'} overflow={'hidden'} className="service-item">
              <Box className="service-item__image">
                <Image
                  src={item.thumbnail ? item.thumbnail : '/images/blog.avif'}
                  placeholder="blur"
                  layout="fill"
                  blurDataURL={item.thumbnail ? item.thumbnail : '/images/blog.avif'}
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
                    {t('view_detail')}
                  </MainButton>
                </Box>
              </Box>
            </Box>

            <Stack p={2} spacing={1}>
              <Typography
                fontSize={'1rem'}
                fontWeight={700}
                className="cursor--pointer line-camp-2"
              >
                {renderTextByLocale(item, 'title')}
              </Typography>

              <Typography className="line-camp-2">
                {renderTextByLocale(item, 'description')}
              </Typography>
            </Stack>
          </Stack>
        </FadeIn>
      </Link>
    </Grid>
  )
}
