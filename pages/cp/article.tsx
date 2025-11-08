import { HeadPage } from '@/components'
import { MainCPLayout } from '@/layouts/cp'
import { ArticleListContainer } from '@/plugins/cp/article/components'
import { breadcrumbsState } from '@/store/common'
import { useEffect } from 'react'
import { setRecoil } from 'recoil-nexus'

export default function BlogsPage() {
  // Handle set breadcrumb on header
  useEffect(() => {
    setRecoil(breadcrumbsState, [
      { name: 'Dashboard', to: '/cp' },
      { name: 'Articles', to: '' },
    ])

    // Clear up function
    return () => {
      setRecoil(breadcrumbsState, [])
    }
  }, [])

  return (
    <>
      <HeadPage title="Article" />
      <ArticleListContainer />
    </>
  )
}

BlogsPage.Layout = MainCPLayout
