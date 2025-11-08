import { HeadPage } from '@/components'
import { MainFrontLayout } from '@/layouts/front'
import { MainContainer } from '@/plugins/front/main/components'

export default function HomePage() {
  return (
    <>
      <HeadPage title={'Home Page'} />
      <MainContainer />
    </>
  )
}

HomePage.Layout = MainFrontLayout
