import { HeadPage } from '@/components'
import { fetchProjectSlugs } from '@/libs/static-build/projectPaths'
import { ProjectDetailContainer } from '@/plugins/front/course/components/course-detail-container'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function CourseDetailPage() {
  return (
    <>
      <HeadPage title="Dự án" />
      <ProjectDetailContainer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchProjectSlugs('vi')

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
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
