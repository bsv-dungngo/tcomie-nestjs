import { Close } from '@mui/icons-material'
import { Box, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material'
import { ReactNode, memo } from 'react'
import { brand } from '../colors/brand'

type IBasicModalProps = {
  children?: ReactNode
  open?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  onClose?: () => void
}

export default memo((props: IBasicModalProps) => {
  const { children, open = false, maxWidth = 'xs', title = '', onClose } = props

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      sx={{
        zIndex: 999 + 1,
        '& .MuiPaper-root': {
          borderRadius: '10px',
        },
      }}
    >
      {title && (
        <Stack
          direction={'row'}
          alignItems="center"
          px={'16px'}
          py={'12px'}
          justifyContent="space-between"
          bgcolor={brand.gray100}
        >
          <Typography fontSize={'17px'} fontWeight={600} textAlign="center" flex={1}>
            {title}
          </Typography>

          <IconButton size="small" onClick={onClose}>
            <Close sx={{ fill: brand.dark }} />
          </IconButton>
        </Stack>
      )}
      <DialogContent dividers>
        <Box minHeight={100} pb={0.5}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  )
})
