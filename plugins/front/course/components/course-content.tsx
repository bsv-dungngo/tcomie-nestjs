import { ButtonLink } from '@/components/button/button-link'
import MainModal from '@/components/modal/MainModal'
import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { ItemCheckPoint } from './item-point'

interface IProps {
  chapters: any[]
}

export const CourseContent = ({ chapters }: IProps) => {
  const [isOpenAll, setIsOpenAll] = useState(false)
  const [expanded, setExpanded] = useState(Array(chapters.length).fill(false))

  const [isOpenPreview, setIsOpenPreview] = useState(false)

  const handleTogglePreview = () => {
    setIsOpenPreview(!isOpenPreview)
  }

  const handleOpenAll = useCallback(() => {
    // Toggle the isOpenAll state for individual items
    const newExpanded = Array(chapters.length).fill(!isOpenAll)
    setExpanded(newExpanded)

    // Toggle the global state for expanding/collapsing all items
    setIsOpenAll(!isOpenAll)
  }, [isOpenAll, chapters])

  const handleToggle = (index: number) => {
    const newExpanded = [...expanded]
    newExpanded[index] = !newExpanded[index]
    setExpanded(newExpanded)
  }

  useEffect(() => {
    if (!expanded.includes(false)) {
      setIsOpenAll(true)
    } else {
      setIsOpenAll(false)
    }
  }, [expanded])

  return (
    <>
      <Typography pt={4} fontSize={'1.1rem'} fontWeight={700}>
        Nội dung khóa học
      </Typography>

      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pt={2}>
        <Typography fontWeight={500}>
          <strong>20</strong> chương • <strong>118</strong> bài học • Thời lượng{' '}
          <strong>4 tháng</strong>
        </Typography>

        <ButtonLink
          textBtn={!expanded.includes(false) || isOpenAll ? 'Thu nhỏ tất cả' : 'Mở rộng tất cả'}
          disabledArrow
          onClick={handleOpenAll}
        />
      </Stack>

      <Stack spacing={1} pt={2}>
        {chapters.map((chapter, index) => (
          <Accordion
            key={index}
            expanded={expanded[index]}
            onChange={() => handleToggle(index)}
            disableGutters
            elevation={0}
            className="course-chapter-item"
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography fontWeight={700}>
                {index + 1}. {chapter.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Stack spacing={1} pt={1}>
                {chapter.mainCourse.map((course: any, index: number) => (
                  <ItemCheckPoint
                    key={index}
                    text={course.title}
                    handleClickPreview={handleTogglePreview}
                  />
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      <MainModal
        open={isOpenPreview}
        onClose={handleTogglePreview}
        maxWidth="md"
        title="Giới thiệu khóa học"
      >
        <Typography fontWeight={700} fontSize={'16px'} pb={3}>
          Responsive Với Grid System
        </Typography>
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/j942wKiXFu8?si=BD-XnrkgbLNpFF5K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </MainModal>
    </>
  )
}
