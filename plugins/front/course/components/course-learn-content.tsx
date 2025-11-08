import { Stars } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'

interface IProps {
  courseLearnItems: any[]
}

export const CourseLearnContent = ({ courseLearnItems }: IProps) => {
  return (
    <>
      <Typography pt={4} fontSize={'1.1rem'} fontWeight={700}>
        Bạn sẽ học được gì?
      </Typography>

      <Grid container spacing={1} pt={2}>
        {courseLearnItems.map((item, index) => (
          <Grid item key={index} md={6}>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Stars color="primary" fontSize="small" />{' '}
              <Typography fontWeight={500}>{item.title}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
