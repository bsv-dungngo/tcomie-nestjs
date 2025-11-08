import { HeadPage } from '@/components'
import { MainFrontLayout } from '@/layouts/front'
import { AboutContainer } from '@/plugins/front/about/components'

export default function AboutPage() {
  return (
    <>
      <HeadPage title={'Giới thiệu'} />
      <AboutContainer />
    </>
  )
}

AboutPage.Layout = MainFrontLayout
