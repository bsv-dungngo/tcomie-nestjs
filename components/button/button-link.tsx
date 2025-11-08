import { KeyboardArrowRight } from '@mui/icons-material'
import { Box } from '@mui/material'

interface IProps {
  textBtn: string
  disabledArrow?: boolean
  onClick?: () => void
}

export const ButtonLink = ({ textBtn, disabledArrow, onClick }: IProps) => {
  return (
    <Box className="btn-link" onClick={onClick}>
      {textBtn}
      {!disabledArrow && <KeyboardArrowRight />}
    </Box>
  )
}
