import { MainContainer } from '@/components'
import { SectionTitle } from '@/components/container/section-title'
import { Box, Grid } from '@mui/material'
import { TestimonialsSection } from './ab-testimonials'

export const AbTestimonialContainer = () => {
  return (
    <MainContainer>
      <Grid container py={12}>
        <Grid item xs={12} md={5}>
          <Box display={{ xs: 'none', md: 'flex' }}>
            <SectionTitle
              align="start"
              subTitle="TESTIMONIALS"
              description="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim."
              title={
                <>
                  What Our Students <br /> Have To Say
                </>
              }
            />
          </Box>

          <Box display={{ xs: 'flex', md: 'none' }} pb={4}>
            <SectionTitle
              align="center"
              subTitle="TESTIMONIALS"
              description="Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim."
              title={
                <>
                  What Our Students <br /> Have To Say
                </>
              }
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <TestimonialsSection />
        </Grid>
      </Grid>
    </MainContainer>
  )
}
