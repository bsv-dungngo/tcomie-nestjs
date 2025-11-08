import { MainContainer } from '@/components'
import { PageBGContainer } from '@/components/container/page-bg-container'
import { Box } from '@mui/material'
import { ArticleListContent } from './article-list-content'
import { ArticleTabs } from './article-tabs'

export const ArticleListContainer = () => {
  return (
    <Box>
      <PageBGContainer title={''} imageBG="/images/blog.avif" />

      <MainContainer>
        <ArticleTabs
          slot1={<ArticleListContent type="event" />}
          slot2={<ArticleListContent type="news" />}
        />
      </MainContainer>
    </Box>
  )
}
