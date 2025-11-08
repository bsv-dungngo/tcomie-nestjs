import { HeadPage, MainContainer } from '@/components'
import { PageBGContainer } from '@/components/container/page-bg-container'
import { renderTextByLocale } from '@/config/const'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useArticleValues from '../hooks/useProjectValues'
import { ArticleRecently } from './article-recently'

export const ProjectDetailContainer = () => {
  const { methods, projectDetail, projects, queryFormData } = useArticleValues()
  const router = useRouter()

  const slug = router?.query?.slug

  useEffect(() => {
    if (slug) {
      methods.loadDetail(slug as string)
      methods.load(queryFormData.value)
    }
  }, [slug, queryFormData.value])

  return (
    <>
      {projectDetail && (
        <React.Fragment>
          <HeadPage title={renderTextByLocale(projectDetail, 'title')} />

          <PageBGContainer title={''} imageBG={projectDetail.thumbnail} />

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
                  {renderTextByLocale(projectDetail, 'description')}
                </Typography>

                <Box
                  pb={{ xs: 0, md: 4 }}
                  className="article-html-render"
                  dangerouslySetInnerHTML={{ __html: renderTextByLocale(projectDetail, 'content') }}
                ></Box>
              </Grid>

              <Grid item xs={12} md={4} display={{ xs: 'none', md: 'flex' }}>
                <ArticleRecently articles={projects} />
              </Grid>
            </Grid>
          </MainContainer>

          <ArticleRecently display={{ xs: 'flex', md: 'none' }} articles={projects} />
        </React.Fragment>
      )}
    </>
  )
}
