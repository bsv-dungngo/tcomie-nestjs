import { MainButton, MainContainer, TitleContainer } from '@/components'
import { ChevronRight } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import { t } from 'i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import { ArticleItem } from '../../article/components'
import useArticleValues from '../../article/hooks/useArticleValues'
import { articleQueryDataState, articleTabActivedState } from '../../article/store'

export const News = (props: any) => {
  const { methods, articles } = useArticleValues()
  const queryFormData = useRecoilValue(articleQueryDataState)

  useEffect(() => {
    const query = {
      ...queryFormData,
      type: props.type,
      page: 1,
    }

    methods.load(query)
  }, [queryFormData, props.type])

  useEffect(() => {
    return () =>
      setRecoil(articleQueryDataState, (prev) => {
        return {
          ...prev,
          page: 1,
        }
      })
  }, [])

  const router = useRouter()

  const handleClick = () => {
    router.push(t('linkFrArticle') ?? '')
    setRecoil(articleTabActivedState, props.type == 'news' ? '2' : '1')
    setRecoil(articleQueryDataState, (prev) => {
      return {
        ...prev,
        page: 1,
      }
    })
  }

  return (
    <Box py={{ xs: 4, md: 6 }} sx={{ background: '#f4f4f4' }}>
      <MainContainer>
        <TitleContainer
          subTitle={''}
          title={props.type == 'news' ? t('latest_news') : t('latest_events')}
        />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          rowSpacing={{ xs: 2, md: 4 }}
          pt={{ xs: 4, md: 6 }}
        >
          {articles.length > 0 &&
            articles
              .slice(0, 4)
              .map((item, index) => <ArticleItem key={index} smSize={6} size={3} item={item} />)}
        </Grid>

        <Box textAlign={'center'} pt={{ xs: 4, md: 6 }}>
          <MainButton
            variant="outlined"
            roundedFull
            endIcon={<ChevronRight fontSize="small" />}
            handleClick={handleClick}
          >
            {t('view_more')}
          </MainButton>
        </Box>
      </MainContainer>
    </Box>
  )
}
