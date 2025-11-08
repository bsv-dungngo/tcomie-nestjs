import { HeadPage } from '@/components'
import { ArticleListContainer } from '@/plugins/front/article/components/article-list-container'

export default function BlogsPage() {
  return (
    <>
      <HeadPage title="Tin Tức - Sự Kiện" />
      <ArticleListContainer />
    </>
  )
}
