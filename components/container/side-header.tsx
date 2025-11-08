import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'

interface IProps {
  title: string
  buttonText: string
  buttonLink?: string
  id?: string
  paddingTop?: number
}

export const SideHeader = ({
  title,
  buttonLink = '/',
  buttonText = '',
  id = '',
  paddingTop,
}: IProps) => {
  return (
    <Stack
      id={id}
      direction={'row'}
      pb={1}
      paddingTop={paddingTop}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography fontSize={{ xs: '1rem', md: '1.4rem' }} fontWeight={800}>
        {title}
      </Typography>

      <Link href={buttonLink}>
        <Box className="btn-link" zIndex={999}>
          {buttonText}
          <ArrowRightAlt />
        </Box>
      </Link>
    </Stack>
  )
}
