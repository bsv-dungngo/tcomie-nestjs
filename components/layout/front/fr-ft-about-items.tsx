import { brand } from '@/components/colors/brand'
import { TitleDivider } from '@/components/divider/title-divider'
import { ChevronRight } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export const FrFtAboutItems = () => {
  const router = useRouter()

  const aboutItems = [
    {
      title: 'Giới thiệu',
      id: 'info',
    },
    {
      title: 'Liên hệ',
      id: 'contact',
    },
    {
      title: 'Điều khoản',
      id: 'terms',
    },
    {
      title: 'Cơ hội làm việc',
      id: 'jobs',
    },
  ]

  return (
    <>
      <Grid item xs={5} md={3} sm={6}>
        <Typography color={'#fff'} fontWeight={700}>
          VỀ FLIT
        </Typography>
        <TitleDivider color={brand.gray600} width="40px" />

        <Stack>
          {aboutItems.map((item, index) => {
            return (
              <Stack
                key={index}
                direction={'row'}
                className="footer-service-item"
                borderBottom={aboutItems.length - 1 == index ? 0 : 1}
                borderColor={brand.gray700}
              >
                <Typography fontSize={'13px'}>{item.title}</Typography>
                <ChevronRight fontSize="small" />
              </Stack>
            )
          })}
        </Stack>
      </Grid>
    </>
  )
}
