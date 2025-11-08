import { Box, IconButton, IconButtonProps } from '@mui/material'
import { ReactNode } from 'react'

interface IProps extends IconButtonProps {
  children: ReactNode
}

export const MainIconButton = ({ children, ...buttonProps }: IProps) => {
  return (
    <Box>
      <IconButton size="small" color="cpPrimary" className="main-icon-button" {...buttonProps}>
        {children}
      </IconButton>
    </Box>
  )
}
