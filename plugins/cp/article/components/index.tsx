import { MainDataTable, SearchField } from '@/components'
import { ButtonAddNew } from '@/components/button/cp'
import { StatusLabel } from '@/components/common/status-label'
import { MainDataTableBodyRow } from '@/components/data-table/main-data-table-body-row'
import { HeadCellsType } from '@/components/data-table/type'
import { ImageBox } from '@/components/image/image-box'
import { ArticleReadDto } from '@/config/client'
import { renderFirstLetterUppercase } from '@/config/const'
import { openModalDeleteState, openModalDetailState } from '@/store/common'
import { dataTableParamsState } from '@/store/param-data'
import { calcIndexDataTable } from '@/utils'
import { Chip, Stack, TableCell } from '@mui/material'
import { useEffect } from 'react'
import Highlighter from 'react-highlight-words'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { getArticleListApi } from '../api'
import { articleActiveState, articleListState } from '../store'
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
    id: 'type',
    title: 'Type',
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

export const ArticleListContainer = () => {
  // Recoil
  const [openModalDelete, setOpenModalDelete] = useRecoilState(openModalDeleteState)
  const [openModalDetail, setOpenModalDetail] = useRecoilState(openModalDetailState)
  const params = useRecoilValue(dataTableParamsState)
  const articleList = useRecoilValue<ArticleReadDto[]>(articleListState)
  const setArticleActive = useSetRecoilState(articleActiveState)

  const handleOpenDetail = (articleActive: ArticleReadDto | null) => {
    setOpenModalDetail(!openModalDetail)
    setArticleActive(articleActive)
  }

  const handleShowPopupDelete = (articleActive: ArticleReadDto | null) => {
    setOpenModalDelete(true)
    setArticleActive(articleActive)
  }

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    getArticleListApi(params)
  }, [params])

  const HeadTable = (
    <Stack direction={'row'} justifyContent="space-between">
      <Stack direction={'row'} spacing={2}>
        <SearchField />
        {/* <Filter /> */}
      </Stack>

      <ButtonAddNew
        btnText={'New article'}
        handleClick={() => {
          setOpenModalDetail(!openModalDetail)
          setArticleActive(null)
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
        {articleList?.length > 0 &&
          articleList.map((item: ArticleReadDto, index: number) => (
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
                  textToHighlight={item.title_vi ?? ''}
                />
              </TableCell>

              <TableCell>
                <Chip label={renderFirstLetterUppercase(item?.type ?? '')} size="small" />
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
