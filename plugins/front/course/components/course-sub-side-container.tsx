import { Box, Grid } from '@mui/material'
import { CourseIncludes } from './course-includes'
import { CourseOpenSchedule } from './course-open-schedule'
import { CoursePriceSale } from './course-price-sale'
import { CourseVideoPreview } from './course-video-preview'

interface IProps {
  display?: any
}

export const CourseSubSideContainer = ({ display = { xs: 'none', lg: 'flex' } }: IProps) => {
  return (
    <Grid item xs={12} lg={4} display={display} flexDirection={'column'}>
      <CourseVideoPreview />

      <Box bgcolor={'#fff'} px={2} pb={2} pt={1} mt={2} borderRadius={'10px'}>
        <CoursePriceSale />

        <CourseIncludes />

        <CourseOpenSchedule />
      </Box>
    </Grid>
  )
}
