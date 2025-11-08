import { HeadPage } from '@/components'
import { MainFrontLayout } from '@/layouts/front'
import { ContactContainer } from '@/plugins/front/contact/components'

export default function ContactPage() {
  return (
    <>
      <HeadPage title={'Liên hệ'} />
      <ContactContainer />
    </>
  )
}

ContactPage.Layout = MainFrontLayout
