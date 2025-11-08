import { HeadPage } from '@/components'
import { MainCPLayout } from '@/layouts/cp'
import { ProjectListContainer } from '@/plugins/cp/project/components'
import { breadcrumbsState } from '@/store/common'
import { useEffect } from 'react'
import { setRecoil } from 'recoil-nexus'

export default function BlogsPage() {
  // Handle set breadcrumb on header
  useEffect(() => {
    setRecoil(breadcrumbsState, [
      { name: 'Dashboard', to: '/cp' },
      { name: 'Projects', to: '' },
    ])

    // Clear up function
    return () => {
      setRecoil(breadcrumbsState, [])
    }
  }, [])

  return (
    <>
      <HeadPage title="Project" />
      <ProjectListContainer />
    </>
  )
}

BlogsPage.Layout = MainCPLayout
