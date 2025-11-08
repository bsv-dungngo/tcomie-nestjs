import { brand } from '@/components/colors/brand'
import MainModal from '@/components/modal/MainModal'
import { openModalDetailState } from '@/store/common'
import { Stack, Typography } from '@mui/material'
import { useRecoilState } from 'recoil'
import { contactActiveState } from '../store'

export const ModalDetail = () => {
  const [openModalDetail, setOpenModalDetail] = useRecoilState(openModalDetailState)
  const [contactActive, setContactActive] = useRecoilState(contactActiveState)

  // Handle close modal
  const handleClose = () => {
    setOpenModalDetail(!openModalDetail)
    setContactActive(null)
  }

  return (
    <MainModal open={openModalDetail} maxWidth="sm" title={'Contact detail'} onClose={handleClose}>
      <Stack border={1} borderColor={brand.gray200} borderRadius={'4px'}>
        <ItemRow title="Full Name" subTitle={contactActive?.fullname ?? ''} />
        <ItemRow title="Email" subTitle={contactActive?.email ?? ''} isGray />
        <ItemRow title="Phone" subTitle={contactActive?.phone ?? ''} />
        <ItemRow title="Title" subTitle={contactActive?.title ?? ''} isGray />
        <ItemRow title="Message" subTitle={contactActive?.message ?? ''} />
      </Stack>
    </MainModal>
  )
}

interface IITemRow {
  title: string
  subTitle: string
  isGray?: boolean
}

const ItemRow = ({ subTitle, title, isGray }: IITemRow) => {
  return (
    <Stack direction={'row'} bgcolor={isGray ? brand.gray200 : ''} py={1} px={2}>
      <Typography width={'160px'}>{title}</Typography>
      <Typography>{subTitle}</Typography>
    </Stack>
  )
}
