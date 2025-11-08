import { FadeIn, MainContainer } from '@/components'
import { brand } from '@/components/colors/brand'
import { SectionTitle } from '@/components/container/section-title'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { t } from 'i18next'

export const AbWhyChooseUsContainer = () => {
  const items = [
    {
      title: t('serviceTitle1'),
      desc: t('serviceDesc1'),
      icon: '/images/vectors/featrues-img-01.webp',
    },
    {
      title: t('serviceTitle2'),
      desc: t('serviceDesc2'),
      icon: '/images/vectors/featrues-img-02.webp',
    },
    {
      title: t('serviceTitle3'),
      desc: t('serviceDesc3'),
      icon: '/images/vectors/featrues-img-02.webp',
    },
  ]

  return (
    <Box pt={6} bgcolor={brand.gray100} position={'relative'} width={'100%'} height={'100%'}>
      <div className="why-choose-us-shape-01">
        <img src="/images/shapes/shape-04-2.png" alt="" />
      </div>

      <div className="why-choose-us-shape-02">
        <img src="/images/shapes/shape-40.png" alt="" />
      </div>

      <div className="why-choose-us-shape-03"></div>

      <MainContainer>
        <FadeIn yInitial={100} yAfter={0}>
          <SectionTitle
            subTitle=""
            title={
              <span>
                <span className="gradient-text">{t('field_activity')}</span>
              </span>
            }
          />
        </FadeIn>

        <Grid container spacing={2} pt={6} mb={8} zIndex={10} height={'100%'}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} zIndex={10} height={'100%'}>
              <Card sx={{ boxShadow: brand.boxShadowSM, height: '100%' }}>
                <Box px={2} py={6} pb={1}>
                  <Stack spacing={2}>
                    <Typography
                      textAlign={'center'}
                      fontSize={'18px'}
                      fontWeight={700}
                      color={brand.darkBlue}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      textAlign={'center'}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                      sx={{
                        minHeight: {
                          sm: 'auto',
                          md: '430px',
                          '& ul': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                          },
                          '& li': {
                            lineHeight: '1.8',
                          },
                        },
                      }}
                    ></Box>

                    {/* <Box height={'200px'} width={'100%'} position={'relative'}>
                      <Image src={item.icon} alt="" layout="fill" objectFit="contain" />
                    </Box> */}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MainContainer>

      <Box
        position={'absolute'}
        bottom={0}
        zIndex={0}
        height={'200px'}
        width={'100%'}
        bgcolor={'#fff'}
        sx={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
      ></Box>
    </Box>
  )
}
