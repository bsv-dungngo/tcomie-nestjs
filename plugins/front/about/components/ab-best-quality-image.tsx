import { FadeIn } from '@/components'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

export const AbBestQualityImageContainer = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={7}
        position={'relative'}
        className="about-best-quality-image-container"
      >
        <div className="about-best-quality-image-container__shape-01">
          <img src="/images/shapes/shape-38.png" alt="" />
        </div>

        <div className="about-best-quality-image-container__shape-02">
          <img src="/images/shapes/shape-37.png" alt="" />
        </div>

        <div className="about-best-quality-image-container__shape-03">
          <img src="/images/shapes/shape-04-2.png" alt="" />
        </div>

        {/* <div className="about-best-quality-image-container__shape-04">
          <img src="/images/shapes/shape-02.png" alt="" />
        </div> */}

        <Box className="about-best-quality-image-container__main-image">
          <Image
            src={'https://demo.edublink.co/wp-content/uploads/2023/07/about-11.webp'}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <FadeIn yInitial={-400} yAfter={-500} delay={0.3} viewport={true}>
          <Box
            className="about-best-quality-image-container__main-image2"
            display={{ xs: 'none', md: 'flex' }}
          >
            <Box position={'relative'} height={'100%'} width={'100%'}>
              <Image
                src={'https://demo.edublink.co/wp-content/uploads/2023/07/about-12.webp'}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
        </FadeIn>
      </Grid>
    </>
  )
}
