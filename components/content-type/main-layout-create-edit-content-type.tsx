import { Grid, Stack } from '@mui/material'
import { ReactNode } from 'react'

interface IProps {
  mainSection: ReactNode
  subSection: ReactNode
}

export const MainLayoutCreateEditContentType = ({ mainSection, subSection }: IProps) => {
  return (
    <Grid container spacing={2} pt={2} pb={1}>
      <Grid item md={9}>
        {mainSection}
      </Grid>

      <Grid item md={3}>
        <Stack spacing={2}>{subSection}</Stack>
      </Grid>
    </Grid>
  )
}
