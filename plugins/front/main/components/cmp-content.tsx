import { FadeIn, MainContainer } from '@/components'
import { brand } from '@/components/colors/brand'
import { t } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'

interface IProps {
  isHome?: boolean
  showViewMore?: boolean
  isTextGray?: boolean
}

export const CmpContent = ({ isHome, showViewMore, isTextGray }: IProps) => {
  const whyChooseUsItems: any[] = [
    {
      title: t('about1'),
      description: ``,
    },
    {
      title: t('about2'),
      description: ``,
    },
    {
      title: t('about3'),
      description: ``,
    },
  ]
  return (
    <MainContainer>
      <Stack
        position={'relative'}
        zIndex={2}
        maxWidth={{ lg: '50%' }}
        spacing={5}
        pt={{ xs: 4, md: 6 }}
        pb={5}
      >
        <Box
          display={'flex'}
          justifyContent={{ xs: 'center', lg: 'start' }}
          sx={{ minHeight: isHome ? 500 : 'auto' }}
          className="about-content"
        >
          <Box display={'inline-flex'} flexDirection={'column'} sx={{ margin: 'auto !important' }}>
            <Typography
              fontSize={{ xs: '16px', md: '17px' }}
              color={isTextGray ? brand.dark : '#fff'}
              pb={2}
              textAlign={{ xs: 'center', lg: 'center' }}
              dangerouslySetInnerHTML={{
                __html: isHome ? t('aboutHeaderHome') : t('aboutHeader'),
              }}
            ></Typography>

            {isHome && (
              <Typography
                textAlign={'center'}
                fontSize={{ xs: '18px', md: '22px' }}
                pb={3}
                pt={2}
                fontWeight={700}
                className="gradient-text"
              >
                Connecting – Creating New Value – Worth living
              </Typography>
            )}

            <Box
              height={'6px'}
              width={'50px'}
              mx={'auto'}
              bgcolor={isTextGray ? brand.gray300 : '#fff'}
              borderRadius={'20px'}
            ></Box>
          </Box>
        </Box>

        {!isHome && (
          <Stack spacing={4}>
            {whyChooseUsItems.map((item, index) => {
              const delay = `${0 + '.' + (index + 2)}`
              return (
                <FadeIn key={index} xInitial={-100} yAfter={0} delay={+delay} viewport={true}>
                  <Stack
                    key={index}
                    direction={'row'}
                    spacing={2}
                    alignItems={'flex-start'}
                    className="why-choose-us__item"
                  >
                    <Typography
                      className="why-choose-us__item-number"
                      color={isTextGray ? brand.gray400 : '#fff'}
                    >
                      {index + 1}
                    </Typography>

                    <Stack>
                      <Typography fontWeight={600} color={isTextGray ? brand.dark : '#fff'}>
                        {item.title}
                      </Typography>

                      <Typography
                        pr={{ lg: '48px' }}
                        lineHeight={'1.8'}
                        variant="body2"
                        color={isTextGray ? brand.dark : '#fff'}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </FadeIn>
              )
            })}
          </Stack>
        )}

        {/* {props.showViewMore ? (
          <Box textAlign={'center'} pb={6}>
            <Link href={'/vi/gioi-thieu'}>
              <MainButton
                variant="contained"
                color="primary"
                roundedFull
                endIcon={<ChevronRight fontSize="small" />}
              >
                {t('viewAboutDetail')}
              </MainButton>
            </Link>
          </Box>
        ) : (
          <Box></Box>
        )} */}
      </Stack>
    </MainContainer>
  )
}
