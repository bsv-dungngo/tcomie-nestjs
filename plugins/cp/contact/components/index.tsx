import { MainDataTable, SearchField } from '@/components'
import { MainDataTableBodyRow } from '@/components/data-table/main-data-table-body-row'
import { HeadCellsType } from '@/components/data-table/type'
import { ContactReadDto } from '@/config/client'
import { openModalDetailState } from '@/store/common'
import { dataTableParamsState } from '@/store/param-data'
import { calcIndexDataTable } from '@/utils'
import { Stack, TableCell } from '@mui/material'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { getContactListApi } from '../api'
import { contactActiveState, contactListState } from '../store'
import { ModalDetail } from './modal-detail'

export const ContactListContainer = () => {
  // Recoil
  const [openModalDetail, setOpenModalDetail] = useRecoilState(openModalDetailState)
  const params = useRecoilValue(dataTableParamsState)
  const contactList = useRecoilValue<ContactReadDto[]>(contactListState)
  const setBaseListActive = useSetRecoilState(contactActiveState)

  const handleOpenDetail = (contactActive: ContactReadDto | null) => {
    setOpenModalDetail(!openModalDetail)
    setBaseListActive(contactActive)
  }

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    getContactListApi(params)
  }, [params])

  const HeadTable = (
    <Stack direction={'row'} justifyContent="space-between">
      <SearchField />
    </Stack>
  )

  return (
    <>
      <MainDataTable
        headCells={headCells}
        maxHeight={'calc(100vh - 230px)'}
        actionHeadProps={HeadTable}
      >
        {contactList?.length > 0 &&
          contactList.map((item: ContactReadDto, index: number) => (
            <MainDataTableBodyRow
              key={item.id}
              onClick={() => handleOpenDetail(item)}
              hiddenDeleteButton
              isShowView
              isHidenEdit
            >
              <TableCell>{calcIndexDataTable(index)}</TableCell>
              <TableCell>{item.fullname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.message}</TableCell>
            </MainDataTableBodyRow>
          ))}
      </MainDataTable>

      {openModalDetail && <ModalDetail />}
    </>
  )
}

const headCells: HeadCellsType[] = [
  {
    id: 'id',
    title: 'ID',
    width: 10,
  },
  {
    id: 'fullname',
    title: 'fullname',
    width: 50,
  },
  {
    id: 'email',
    title: 'email',
  },

  {
    id: 'phone',
    title: 'phone',
    width: 50,
  },
  {
    id: 'title',
    title: 'title',
  },

  {
    id: 'message',
    title: 'message',
  },

  {
    width: 100,
    id: 'action',
    title: '',
    align: 'right',
  },
]
