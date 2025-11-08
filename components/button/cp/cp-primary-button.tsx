import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

interface IProps extends ButtonProps {
  children: ReactNode
  startIcon?: ReactNode
  variant?: 'contained' | 'text' | 'outlined'
  endIcon?: ReactNode
}

export const CPPrimaryButton = ({
  children,
  startIcon,
  variant = 'contained',
  endIcon,
  ...buttonProps
}: IProps) => {
  return (
    <Button
      className="cp-primary-button"
      color="cpPrimary"
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
