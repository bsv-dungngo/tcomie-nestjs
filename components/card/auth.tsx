import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

/* A type checking for the props. */
interface ICardAuth {
  children?: ReactNode
  vector?: ReactNode
  title?: string
  description?: string
}

export const CardAuth = (props: ICardAuth) => {
  const { children, vector = '', title = '', description = '' } = props

  return (
    <Box className="card-auth-wrapper">
      <Box width={'100%'}>
        <Box className="card-auth-wrapper__main">
          <Grid container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={6} display={{ xs: 'none', md: 'flex' }} flexShrink={0}>
              {vector}
            </Grid>

            <Grid item xs={12} md={6} className="card-auth-wrapper--content">
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
