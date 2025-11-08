import { Button } from '@mui/material'
import { ReactNode } from 'react'

type IButtonClearProps = {
  children: ReactNode
  marginRight?: number
  marginLeft?: number
  disabled?: boolean
  type?: 'button' | 'submit'
  fullWidth?: boolean
  handleClick?: () => void
  size?: 'medium' | 'small' | 'large'
  startIcon?: ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'white'
    | 'dark'
    | 'darkWhite'
    | 'blue'
  maxWidth?: string
  endIcon?: ReactNode
  roundedFull?: boolean
}

export const MainButton = (props: IButtonClearProps) => {
  // Props
  const {
    children,
    handleClick,
    size = 'small',
    disabled = false,
    fullWidth = false,
    type = 'button',
    startIcon,
    variant,
    color,
    maxWidth = '',
    endIcon,
    roundedFull,
  } = props
  return (
    <Button
      type={type}
      onClick={handleClick}
      size={size}
      disableElevation
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      disabled={disabled}
      startIcon={startIcon}
      sx={{ minWidth: maxWidth, borderRadius: roundedFull ? '20px !important' : '' }}
      className="main-button"
      endIcon={endIcon}
    >
      <span>{children}</span>
    </Button>
  )
}
