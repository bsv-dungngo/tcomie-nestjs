import { MainDataTable, SearchField } from '@/components'
import { ButtonAddNew } from '@/components/button/cp'
import { StatusLabel } from '@/components/common/status-label'
import { MainDataTableBodyRow } from '@/components/data-table/main-data-table-body-row'
import { HeadCellsType } from '@/components/data-table/type'
import { ImageBox } from '@/components/image/image-box'
import { ProjectReadDto } from '@/config/client'
import { openModalDeleteState, openModalDetailState } from '@/store/common'
import { dataTableParamsState } from '@/store/param-data'
import { calcIndexDataTable } from '@/utils'
import { Stack, TableCell } from '@mui/material'
import { useEffect } from 'react'
import Highlighter from 'react-highlight-words'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { getProjectListApi } from '../api'
import { projectActiveState, projectListState } from '../store'
import { ModalDelete } from './modal-delete'
import { ModalDetail } from './modal-detail'

const headCells: HeadCellsType[] = [
  {
    id: 'id',
    title: 'ID',
    width: 10,
  },
  {
    id: 'thumbnail',
    title: 'Thumbnail',
  },
  {
    id: 'title_vi',
    title: 'Title (Vi)',
  },
  {
    id: 'title_en',
    title: 'Title (En)',
  },
  {
    id: 'status',
    title: 'Status',
  },
  {
    id: 'action',
    title: '',
    align: 'right',
  },
]

export const ProjectListContainer = () => {
  // Recoil
  const [openModalDelete, setOpenModalDelete] = useRecoilState(openModalDeleteState)
  const [openModalDetail, setOpenModalDetail] = useRecoilState(openModalDetailState)
  const params = useRecoilValue(dataTableParamsState)
  const projectList = useRecoilValue<ProjectReadDto[]>(projectListState)
  const setProjectActive = useSetRecoilState(projectActiveState)

  const handleOpenDetail = (projectActive: ProjectReadDto | null) => {
    setOpenModalDetail(!openModalDetail)
    setProjectActive(projectActive)
  }

  const handleShowPopupDelete = (projectActive: ProjectReadDto | null) => {
    setOpenModalDelete(true)
    setProjectActive(projectActive)
  }

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    getProjectListApi(params)
  }, [params])

  const HeadTable = (
    <Stack direction={'row'} justifyContent="space-between">
      <Stack direction={'row'} spacing={2}>
        <SearchField />
        {/* <Filter /> */}
      </Stack>

      <ButtonAddNew
        btnText={'New project'}
        handleClick={() => {
          setOpenModalDetail(!openModalDetail)
          setProjectActive(null)
        }}
      />
    </Stack>
  )

  return (
    <>
      <MainDataTable
        headCells={headCells}
        maxHeight={'calc(100vh - 230px)'}
        actionHeadProps={HeadTable}
      >
        {projectList?.length > 0 &&
          projectList.map((item: ProjectReadDto, index: number) => (
            <MainDataTableBodyRow
              key={item.id}
              onClick={() => handleOpenDetail(item)}
              onHandleClickDelete={() => handleShowPopupDelete(item)}
            >
              <TableCell>{calcIndexDataTable(index)}</TableCell>

              <TableCell>
                <ImageBox src={item.thumbnail ?? ''} height="60px" width="120px" />
              </TableCell>

              <TableCell>
                <Highlighter
                  searchWords={[params?.keyword ? params?.keyword : '']}
                  textToHighlight={item.title_vi ?? ''}
                />
              </TableCell>

              <TableCell>
                <Highlighter
                  searchWords={[params?.keyword ? params?.keyword : '']}
                  textToHighlight={item.title_en ?? ''}
                />
              </TableCell>

              <TableCell>
                <StatusLabel isPublished={item?.is_published ?? false} />
              </TableCell>
            </MainDataTableBodyRow>
          ))}
      </MainDataTable>

      {openModalDetail && <ModalDetail />}
      {openModalDelete && <ModalDelete />}
    </>
  )
}
