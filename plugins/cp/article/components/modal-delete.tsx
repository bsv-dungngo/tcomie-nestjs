import { ButtonBase, ButtonDelete } from '@/components/button/cp'
import IconWarning from '@/components/icon/warning'
import MainModal from '@/components/modal/MainModal'
import { openModalDeleteState } from '@/store/common'
import { padNumber } from '@/utils'
import { Box, Stack, Typography } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { useRecoilState, useRecoilValue } from 'recoil'
import { deleteArticleApi } from '../api'
import { articleActiveState } from '../store'

export const ModalDelete = () => {
  const [openModalDelete, setOpenModalDelete] = useRecoilState(openModalDeleteState)
  const articleActive = useRecoilValue(articleActiveState)

  const handleDelete = async () => {
    await deleteArticleApi(articleActive && articleActive?.id ? articleActive?.id : 0)
    setOpenModalDelete(false)
  }

  return (
    <>
      <MainModal
        open={openModalDelete}
        onClose={() => {
          setOpenModalDelete(!openModalDelete)
        }}
      >
        <Box textAlign={'center'}>
          <IconWarning height={60} width={60} color={yellow[600]} />

          <Typography>
            Do you want delete this article <strong>"#{padNumber(articleActive?.id)}"?</strong>
          </Typography>

          <Stack direction={'row'} spacing={2} justifyContent="center" pt={2}>
            <ButtonBase
              btnText={'Close'}
              handleClick={() => {
                setOpenModalDelete(!openModalDelete)
              }}
            />
            <ButtonDelete btnText={'Delete'} handleClick={handleDelete} />
          </Stack>
        </Box>
      </MainModal>
    </>
  )
}
