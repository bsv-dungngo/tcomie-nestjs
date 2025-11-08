import { openModalPreviewImageState } from '@/store/common'
import { Close } from '@mui/icons-material'
import { Dialog, IconButton, Stack } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'

interface IProps {
  imgUrl: string
}

export default memo(({ imgUrl }: IProps) => {
  const openModalPreviewImage = useRecoilValue(openModalPreviewImageState)

  const onClose = () => {
    setRecoil(openModalPreviewImageState, false)
  }

  return (
    <>
      <Dialog
        open={openModalPreviewImage}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        className="modal-transparent"
      >
        <Stack direction={'row'} justifyContent={'flex-end'}>
          <IconButton color="white" onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>

        {imgUrl && (
          <Image
            src={imgUrl}
            placeholder="blur"
            blurDataURL={imgUrl}
            layout="responsive"
            sizes="200vw"
            width={200}
            height={200}
            alt=""
            style={{ maxHeight: '70vh', borderRadius: 4 }}
          />
        )}
      </Dialog>
    </>
  )
})
