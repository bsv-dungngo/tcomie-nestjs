import { MainIconButton } from '@/components/button/main-icon-button'
import { brand } from '@/components/colors/brand'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ArrowDropDownCircle, Check, Delete, DragIndicator } from '@mui/icons-material'
import { Collapse, Stack, Typography } from '@mui/material'
import { MouseEvent, ReactNode } from 'react'

interface IProps {
  isActivedContent: boolean
  children?: ReactNode
  handleRemove: (index: number) => void
  handleChangeCollapse: (index: number) => void
  index: number
  id: number
  handerTitle: string
}

export const ContentUseArrayItemBlock = ({
  isActivedContent,
  children,
  handleRemove,
  handleChangeCollapse,
  index,
  handerTitle,
  id,
}: IProps) => {
  const onHandleRemove = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    handleRemove(index)
  }

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <>
      <Stack
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${!isActivedContent ? 'hover-inActived' : 'hover-actived'} course-expect-item`}
      >
        <Stack onClick={() => handleChangeCollapse(index)} className="course-expect-item-header">
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <ArrowDropDownCircle
              sx={{
                color: brand.gray500,
                transform: isActivedContent ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.6s',
              }}
            />
            <Typography fontWeight={600} fontSize={'13px'}>
              {handerTitle}
            </Typography>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            {isActivedContent && (
              <MainIconButton edge="end" color="cpPrimary">
                <Check fontSize="small" />
              </MainIconButton>
            )}

            <MainIconButton color="error" edge="end" onClick={onHandleRemove}>
              <Delete fontSize="small" />
            </MainIconButton>

            <MainIconButton edge="end" color="default">
              <DragIndicator fontSize="small" />
            </MainIconButton>
          </Stack>
        </Stack>

        <Collapse in={isActivedContent} sx={{ mt: isActivedContent ? 1 : 0 }}>
          {children}
        </Collapse>
      </Stack>
    </>
  )
}
