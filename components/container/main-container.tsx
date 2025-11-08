import { Container } from '@mui/material'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  disableGutters?: boolean
  id?: string
}

export const MainContainer = ({ id, children, maxWidth = 'lg', disableGutters }: IProps) => {
  return (
    <Container id={id} disableGutters={disableGutters} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}
