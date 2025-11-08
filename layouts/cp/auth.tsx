import { Loading } from '@/components'
import { LayoutProps } from '@/types'
import { Container } from '@mui/material'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const AuthCPLayout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  let accessToken = getCookie('flit_access_token')
  if (!(typeof window === 'undefined')) {
    if (!accessToken) {
      accessToken = sessionStorage.getItem('flit_access_token')
    }
  }

  useEffect(() => {
    if (accessToken) {
      router.push('/cp')
    } else {
      setLoading(false)
    }

    setLoading(false)
  }, [accessToken, router])

  return <>{loading ? <Loading open /> : <Container maxWidth="md">{children}</Container>}</>
}
