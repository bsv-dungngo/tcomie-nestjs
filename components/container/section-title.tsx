import { brand } from '@/components/colors/brand'
import { Box, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface IProps {
  align?: 'center' | 'start' | 'end' | any
  title?: ReactNode
  subTitle?: string
  description?: string
}

export const SectionTitle = ({ align = 'center', title, subTitle, description }: IProps) => {
  return (
    <Stack width={'100%'} direction={'column'} alignItems={align}>
      <Typography fontWeight={600} color={brand.gray600} textAlign={align} zIndex={9}>
        {subTitle}
      </Typography>
      <Typography
        fontSize={{ xs: '2rem', md: '2.5rem' }}
        fontWeight={700}
        lineHeight={'120%'}
        pt={2}
        textAlign={align}
        zIndex={9}
      >
        {title}
      </Typography>
      <Box maxWidth={'100px'} textAlign={align} pt={1}>
        <img src="/images/shapes/line.png" alt="" width={'100%'} />
      </Box>

      {description && (
        <Typography textAlign={align} fontSize={'16px'} maxWidth={'400px'}>
          {description}
        </Typography>
      )}
    </Stack>
  )
}
