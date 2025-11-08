import { MainContainer } from '@/components'
import { PageBGContainer } from '@/components/container/page-bg-container'
import { ListCourseSchedule } from './list-course-schedule'
import { OpenScheduleTitle } from './open-schedule-title'

export const OpenScheduleContainer = () => {
  return (
    <>
      <PageBGContainer title="Lịch khai giảng" currentPageTitle="Lịch khai giảng" />

      <MainContainer>
        <OpenScheduleTitle />

        <ListCourseSchedule />
      </MainContainer>
    </>
  )
}
