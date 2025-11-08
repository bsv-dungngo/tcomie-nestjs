import { openModalDeleteState } from '@/store/common'
import { Delete, Edit, RemoveRedEye } from '@mui/icons-material'
import { Stack, TableCell, TableRow } from '@mui/material'
import { ReactNode } from 'react'
import { setRecoil } from 'recoil-nexus'
import { MainIconButton } from '../button/main-icon-button'

interface IProps {
  children: ReactNode
  onClick: () => void
  isDisabledActionButton?: boolean
  onHandleClickDelete?: () => void
  hiddenDeleteButton?: boolean
  isShowView?: boolean
  isHidenEdit?: boolean
}

export const MainDataTableBodyRow = ({
  children,
  onClick,
  isDisabledActionButton,
  onHandleClickDelete,
  hiddenDeleteButton,
  isShowView,
  isHidenEdit,
}: IProps) => {
  const handleShowDeleteModal = (e: any) => {
    e.stopPropagation()
    setRecoil(openModalDeleteState, true)
    onHandleClickDelete && onHandleClickDelete()
  }

  return (
    <TableRow tabIndex={-1} onClick={onClick}>
      {children}

      {!isDisabledActionButton && (
        <TableCell>
          <Stack direction={'row'} spacing={1} justifyContent={'flex-end'}>
            {isShowView && (
              <MainIconButton color="default">
                <RemoveRedEye />
              </MainIconButton>
            )}

            {!isHidenEdit && (
              <MainIconButton color="default">
                <Edit />
              </MainIconButton>
            )}
            {!hiddenDeleteButton && (
              <MainIconButton color="error" onClick={handleShowDeleteModal}>
                <Delete />
              </MainIconButton>
            )}
          </Stack>
        </TableCell>
      )}
    </TableRow>
  )
}
