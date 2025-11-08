import { MainContainer } from '@/components'
import { Box, Grid } from '@mui/material'
import { Banner } from '../../main/components/banner'
import { CmpContent } from '../../main/components/cmp-content'
import { CompanySection } from '../../main/components/company-section'
import { AbBestQualityContainer } from './ab-best-quality'
import { AbBestQualityImageContainer } from './ab-best-quality-image'
import { TeamSection } from './ab-team-section'
import { AbWhyChooseUsContainer } from './ab-why-choose-us'

export const AboutContainer = () => {
  return (
    <Box bgcolor={'#fff'}>
      <Banner isHiddenText />
      <Box display={{ xs: 'flex', lg: 'none' }}>
        <CmpContent isTextGray />
      </Box>

      <CompanySection showViewMore={false} />

      <MainContainer>
        <Grid container mt={{ xs: 0, md: 6 }} pb={6} spacing={4}>
          <AbBestQualityContainer />

          <AbBestQualityImageContainer />
        </Grid>

        {/* <AbPartnersContainer /> */}
      </MainContainer>

      <AbWhyChooseUsContainer />

      {/* <AbTestimonialContainer /> */}

      <TeamSection />
    </Box>
  )
}
