import { HeadPage } from '@/components'
import { MainCPLayout } from '@/layouts/cp'
import { ContactListContainer } from '@/plugins/cp/contact/components'
import { breadcrumbsState } from '@/store/common'
import { useEffect } from 'react'
import { setRecoil } from 'recoil-nexus'

export default function ContactPage() {
  useEffect(() => {
    setRecoil(breadcrumbsState, [
      { name: 'Dashboard', to: '/cp' },
      { name: 'Contacts', to: '' },
    ])

    // Clear up function
    return () => {
      setRecoil(breadcrumbsState, [])
    }
  }, [])

  return (
    <>
      <HeadPage title="Contacts" />
      <ContactListContainer />
    </>
  )
}

ContactPage.Layout = MainCPLayout
