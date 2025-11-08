import { CPPrimaryButton } from '@/components/button/cp/cp-primary-button'
import { openModalDeleteState } from '@/store/common'
import { Delete, Info } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import MainModal from './MainModal'
import ModalAction from './ModalAction'

interface IProps {
  handleDelete: () => void
  title?: string
}

export default memo(({ handleDelete, title = 'Are you sure you want to delete this?' }: IProps) => {
  const open = useRecoilValue(openModalDeleteState)

  const handleClose = () => {
    setRecoil(openModalDeleteState, !open)
  }

  return (
    <MainModal open={open} title="Confirmation" onClose={handleClose}>
      <Stack>
        <Box display={'flex'} justifyContent={'center'} pb={2}>
          <Info fontSize="large" color="error" />
        </Box>

        <Typography pb={10} textAlign={'center'} fontWeight={600}>
          {title}
        </Typography>

        <ModalAction>
          <CPPrimaryButton fullWidth color="inherit" onClick={handleClose}>
            Cancel
          </CPPrimaryButton>

          <CPPrimaryButton fullWidth color="error" startIcon={<Delete />} onClick={handleDelete}>
            Confirm
          </CPPrimaryButton>
        </ModalAction>
      </Stack>
    </MainModal>
  )
})
