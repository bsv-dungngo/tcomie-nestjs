import { fetchArticleSlugs } from '@/libs/static-build/articlePaths'
import { ArticleDetailContainer } from '@/plugins/front/article/components'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function BlogDetailsPage() {
  return (
    <>
      <ArticleDetailContainer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchArticleSlugs('vi')

  return {
    paths: slugs.map((articleSlug) => ({
      params: {
        articleSlug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
