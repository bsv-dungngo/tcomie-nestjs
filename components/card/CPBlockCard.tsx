import { Box, Card } from '@mui/material'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  headerTitle?: string
}

export const CPBlockCard = ({ children, headerTitle }: IProps) => {
  return (
    <Card className="cp-card-block" elevation={0}>
      {headerTitle && <Box className="cp-card-block__header">{headerTitle}</Box>}

      <Box className="cp-card-block__body-content">{children}</Box>
    </Card>
  )
}
