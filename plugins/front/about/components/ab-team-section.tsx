import { MainContainer } from '@/components'
import { SectionTitle } from '@/components/container/section-title'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import Image from 'next/image'

export const TeamSection = () => {
  const teams = [
    {
      title: t('teamTitle1'),
      position: t('teamPosition1'),
      avatar: '/images/teams/thang.jpg',
    },
    {
      title: t('teamTitle2'),
      position: t('teamPosition2'),
      avatar: '/images/teams/trang.jpg',
    },
    {
      title: t('teamTitle4'),
      position: t('teamPosition4'),
      avatar: '/images/teams/han.jpg',
    },
    {
      title: t('teamTitle3'),
      position: t('teamPosition3'),
      avatar: '/images/teams/viet-hoang.jpg',
    },

    {
      title: t('teamTitle5'),
      position: t('teamPosition5'),
      avatar: '/images/teams/quan.jpg',
    },
    {
      title: t('teamTitle6'),
      position: t('teamPosition6'),
      avatar: '/images/teams/dinh.jpg',
    },
    {
      title: t('teamTitle7'),
      position: t('teamPosition7'),
      avatar: '/images/teams/liem.jpg',
    },
    {
      title: t('teamTitle8'),
      position: t('teamPosition8'),
      avatar: '/images/teams/pa.jpg',
    },
  ]

  return (
    <Box id="team" bgcolor={'#fff'}>
      <MainContainer>
        <SectionTitle
          align="center"
          subTitle=""
          description=""
          title={
            <>
              <span className="gradient-text">{t('staff')}</span>
            </>
          }
        />

        <Grid container spacing={2} pb={8} pt={2}>
          {teams.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} mt={3} md={3} className="team-item">
              <Box className="team-avatar">
                <Image src={item.avatar} layout="fill" alt="" objectFit="cover" />
              </Box>

              <Stack pt={1}>
                <Typography textTransform={'uppercase'} textAlign={'center'} fontWeight={700}>
                  {item.title}
                </Typography>

                <Typography textAlign={'center'}>{item.position}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </MainContainer>
    </Box>
  )
}
