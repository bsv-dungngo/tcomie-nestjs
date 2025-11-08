import { HeadPage, MainContainer } from '@/components'
import { PageBGContainer } from '@/components/container/page-bg-container'
import { renderTextByLocale } from '@/config/const'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import useArticleValues from '../hooks/useArticleValues'
import { articleQueryDataState, articlesListFrontState } from '../store'
import { ArticleRecently } from './article-recently'

export const ArticleDetailContainer = () => {
  const { methods, articleDetail } = useArticleValues()
  const router = useRouter()
  const queryFormData = useRecoilValue(articleQueryDataState)
  const articles = useRecoilValue(articlesListFrontState)

  const articleSlug = router?.query?.articleSlug
  useEffect(() => {
    if (articleSlug) {
      methods.loadDetail(articleSlug as string)
      methods.load(queryFormData)
    }
  }, [articleSlug, queryFormData])

  return (
    <>
      {articleDetail && (
        <React.Fragment>
          <HeadPage title={renderTextByLocale(articleDetail, 'title')} />

          <PageBGContainer title={''} imageBG={articleDetail.thumbnail} />

          <MainContainer>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography
                  fontSize={'20px'}
                  fontWeight={700}
                  mb={2}
                  lineHeight={'110%'}
                  pt={{ xs: 2, md: 4 }}
                >
                  {renderTextByLocale(articleDetail, 'title')}
                </Typography>

                {/* <StatusBlock /> */}

                <Box
                  pb={{ xs: 0, md: 4 }}
                  className="article-html-render"
                  dangerouslySetInnerHTML={{ __html: renderTextByLocale(articleDetail, 'content') }}
                ></Box>
              </Grid>

              <Grid item xs={12} md={4} display={{ xs: 'none', md: 'flex' }}>
                <ArticleRecently articles={articles} />
                {/* <BlogCategories />
            <BlogTags /> */}
              </Grid>
            </Grid>
          </MainContainer>

          <ArticleRecently display={{ xs: 'flex', md: 'none' }} articles={articles} />
        </React.Fragment>
      )}
    </>
  )
}
