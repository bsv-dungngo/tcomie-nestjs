import { HeadPage } from '@/components'
import { MainFrontLayout } from '@/layouts/front'
import { ContactContainer } from '@/plugins/front/contact/components'

export default function ContactPage() {
  return (
    <>
      <HeadPage title={'Contact Us'} />
      <ContactContainer />
    </>
  )
}

ContactPage.Layout = MainFrontLayout
