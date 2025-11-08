import { MainContainer } from '@/components'
import { PageBGContainer } from '@/components/container/page-bg-container'
import { ProjectReadDto } from '@/config/client'
import { getProjectListApi } from '@/plugins/cp/project/api'
import { projectListState } from '@/plugins/cp/project/store'
import { dataTableParamsState } from '@/store/param-data'
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { LearnProgramingItem } from './learn-programing-item'

export const CoursesProgramingContainer = () => {
  const params = useRecoilValue(dataTableParamsState)
  const projectList = useRecoilValue<ProjectReadDto[]>(projectListState)

  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    getProjectListApi(params)
  }, [params])

  return (
    <>
      <PageBGContainer title={''} imageBG="/images/banners/5.jpg" currentPageTitle="" />

      <MainContainer>
        <Grid container alignItems={'center'} spacing={3} py={'48px'} rowSpacing={4}>
          {projectList.map((item, index) => {
            const delay = `${0 + '.' + (index + 2)}`
            let size = 4
            if (index <= 1) {
              size = 4
            }

            return <LearnProgramingItem key={index} size={size} item={item} delay={delay} />
          })}
        </Grid>
      </MainContainer>
    </>
  )
}
