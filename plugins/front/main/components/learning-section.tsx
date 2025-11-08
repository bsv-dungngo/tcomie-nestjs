import { MainButton, MainContainer, TitleContainer } from '@/components'
import { ChevronRight } from '@mui/icons-material'
import { Box, Grid, Link } from '@mui/material'
import { t } from 'i18next'
import { useRouter } from 'next/router'
import { LearnProgramingItem } from '../../course/components/learn-programing-item'
import { courseList } from './data-demo'

export const LearningSection = () => {
  const router = useRouter()

  return (
    <Box pt={{ xs: 4, md: 6 }}>
      <MainContainer>
        <Box mb={3}>
          <TitleContainer subTitle={''} title={t('typical_projects')} />
        </Box>

        <Grid
          container
          alignItems={'center'}
          spacing={{ xs: 2, md: 3 }}
          rowSpacing={{ xs: 2, md: 4 }}
        >
          {courseList.slice(0, 5).map((item, index) => {
            const delay = `${0 + '.' + (index + 2)}`
            let size = 4
            if (index == 0) {
              size = 6
            }

            if (index == 1) {
              size = 6
            }

            return <LearnProgramingItem key={index} size={size} item={item} delay={delay} />
          })}
        </Grid>

        <Box textAlign={'center'} mt={3}>
          <Link href={t('linkFrProject') ?? ''}>
            <MainButton
              endIcon={<ChevronRight fontSize="small" />}
              variant="outlined"
              color="primary"
              roundedFull
            >
              {t('view_more')}
            </MainButton>
          </Link>
        </Box>
      </MainContainer>

      {/* <Box bgcolor={'#fff'} py={{ xs: 4, md: 6 }}>
        <MainContainer>
          <SideHeader title="HỌC TIẾNG NHẬT" buttonLink="/hoc-tieng-nhat" buttonText="Xem tất cả" />

          <Grid container alignItems={'center'} spacing={{ xs: 2, md: 3 }} pb={{ xs: 4, md: 6 }}>
            {courseList.slice(0, 3).map((item, index) => {
              const delay = `${0 + '.' + (index + 2)}`
              return <LearnJapaneseItemType2 key={index} delay={+delay} />
            })}
          </Grid>

          <Box textAlign={'center'}>
            <Link href={'/hoc-tieng-nhat'}>
              <MainButton
                endIcon={<ChevronRight fontSize="small" />}
                variant="outlined"
                color="primary"
                roundedFull
              >
                XEM TẤT CẢ KHOÁ HỌC
              </MainButton>
            </Link>
          </Box>
        </MainContainer>
      </Box> */}
    </Box>
  )
}
