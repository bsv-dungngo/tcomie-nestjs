import { CPPrimaryButton } from '@/components/button/cp/cp-primary-button'
import { MainIconButton } from '@/components/button/main-icon-button'
import { CPBlockCard } from '@/components/card/CPBlockCard'
import { brand } from '@/components/colors/brand'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Add } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { isArray } from 'lodash'
import { ReactNode, useState } from 'react'

interface IProps {
  children?: ReactNode
  fieldsLength: number
  handleAdd?: () => void
  headTitle?: string
  fields: any[]
}

export const ContentUseArrayBlock = ({
  children,
  fieldsLength,
  handleAdd,
  headTitle,
  fields,
}: IProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const [items, setItems] = useState([1, 2, 3])
  console.log(fields)

  return (
    <>
      <Box maxWidth={'100%'} width={'100%'}>
        <CPBlockCard headerTitle={headTitle}>
          <Stack className="cp-course-expect-block-items">
            {/* This main content  */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={isArray(fields) ? fields : []}
                strategy={verticalListSortingStrategy}
              >
                {children}
              </SortableContext>
            </DndContext>

            {fieldsLength > 0 ? (
              <Stack className="cp-course-expect-block-items__add-more" direction={'row'}>
                <CPPrimaryButton variant="text" fullWidth onClick={handleAdd}>
                  <Add /> Add an entry
                </CPPrimaryButton>
              </Stack>
            ) : null}

            {fieldsLength <= 0 && (
              <Stack
                justifyContent={'center'}
                width={'100%'}
                className="cursor--pointer"
                onClick={handleAdd}
              >
                <Box display={'flex'} justifyContent={'center'}>
                  <MainIconButton>
                    <Add />
                  </MainIconButton>
                </Box>

                <Typography
                  textAlign={'center'}
                  fontSize={'13px'}
                  fontWeight={600}
                  color={brand.blue}
                >
                  No entry yet, Click on button below to add one
                </Typography>
              </Stack>
            )}
          </Stack>
        </CPBlockCard>
      </Box>
    </>
  )
}
