import { brand } from '@/components/colors/brand'
import { MainContainer } from '@/components/container'
import { Box, Grid, Link, Typography } from '@mui/material'
import { t } from 'i18next'
import { FrFtInfoItems } from './fr-ft-info-items'
import { FrFtLearingItems } from './fr-ft-learing-items'

export const FrontFooter = () => {
  return (
    <Box
      id="front-footer"
      component={'footer'}
      position={'relative'}
      bgcolor="#051650"
      py={2}
      pt={2}
    >
      <div className="elementor-background-overlay"></div>
      <MainContainer>
        <Box mb={2}>
          <Link href={t('linkFrHome') ?? ''}>
            <img src="/images/logo-ft.png" alt="" width="100px" />
          </Link>
        </Box>

        <Grid container spacing={{ xs: 3, md: 3, lg: 4 }}>
          <FrFtInfoItems />

          <FrFtLearingItems />
        </Grid>
      </MainContainer>

      <Typography
        textAlign={'center'}
        borderTop={1}
        borderColor={brand.gray700}
        mt={4}
        pt={2}
        color={'#fff'}
        fontSize={'12px'}
      >
        Copyright © 2023 TCOMIE Inc. All rights reserved.
      </Typography>
    </Box>
  )
}
