import { Typography } from '@mui/material'

interface IProps {
  title: string
}

export const HeadLabel = ({ title }: IProps) => {
  return (
    <Typography pt={4} fontSize={'1.1rem'} fontWeight={700}>
      {title}
    </Typography>
  )
}
