import { MainCPLayout } from '@/layouts/cp'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ServicePage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/cp/article')
  }, [])
  return <></>
}

ServicePage.Layout = MainCPLayout
