import { brand } from '@/components/colors/brand'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { TitleDivider } from '@/components/divider/title-divider'
import { navItems } from './nav-children'

export const FrFtLearingItems = () => {
  const router = useRouter()
  const serviceId = router?.query?.id

  return (
    <>
      <Grid item xs={12} md={3} sm={6}>
        <Box display={'inline-flex'} flexDirection={'column'}>
          <Typography color={'#fff'} fontWeight={700}>
            SITEMAP
          </Typography>

          <Box display={'flex'} justifyContent={'center'}>
            <TitleDivider color={brand.gray600} width="40px" />
          </Box>
        </Box>

        <Stack>
          {navItems.slice(0, 5).map((item, index) => (
            <Stack
              key={index}
              direction={'row'}
              className="footer-service-item"
              borderBottom={0}
              borderColor={brand.gray700}
            >
              <Link href={item.link}>
                <Typography
                  color={serviceId && +serviceId == +item.id ? `${brand.yellow} !important` : ''}
                >
                  {item.title}
                </Typography>
              </Link>
              {/* <ChevronRight fontSize="small" /> */}
            </Stack>
          ))}
        </Stack>
      </Grid>

      {/* <Grid item xs={12} md={3} sm={6} mt={{ xs: '-20px', sm: '0px' }}>
        <Box height={'24px'} display={{ xs: 'none', sm: 'flex' }}></Box>
        <Divider sx={{ borderColor: brand.gray700, display: { xs: 'flex', sm: 'none' } }} />
        <Stack>
          {courseList.slice(4, 8).map((item, index) => (
            <Stack
              key={index}
              direction={'row'}
              className="footer-service-item"
              borderBottom={index == 2 ? 0 : 1}
              borderColor={brand.gray700}
            >
              <Typography
                fontSize={'13px'}
                color={serviceId && +serviceId == +item.id ? `${brand.yellow} !important` : ''}
              >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid> */}
      {/* 
      <Grid item xs={12} md={3} sm={6}>
        <Typography color={'#fff'} fontWeight={700}>
          HỌC TIẾNG NHẬT
        </Typography>
        <TitleDivider color={brand.gray600} width="40px" />

        <Stack>
          {courseList.slice(0, 2).map((item, index) => (
            <Stack
              key={index}
              direction={'row'}
              className="footer-service-item"
              borderBottom={index == 1 ? 0 : 1}
              borderColor={brand.gray700}
            >
              <Typography
                fontSize={'13px'}
                color={serviceId && +serviceId == +item.id ? `${brand.yellow} !important` : ''}
              >
                {item.title}
              </Typography>
              <ChevronRight fontSize="small" />
            </Stack>
          ))}
        </Stack>
      </Grid> */}
    </>
  )
}
