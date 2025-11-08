import { Loading, MainSideBar } from '@/components'
import { LayoutProps } from '@/types'
import { Box } from '@mui/material'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function MainCPLayout({ children }: LayoutProps) {
  const [isLogged, setIsLogged] = useState(true)
  const router = useRouter()

  let accessToken = getCookie('flit_access_token')
  if (!(typeof window === 'undefined')) {
    if (!accessToken) {
      accessToken = sessionStorage.getItem('flit_access_token')
    }
  }

  useEffect(() => {
    if (!accessToken) {
      router.push('/cp/auth/login')
    } else {
      setIsLogged(false)
    }
  }, [accessToken, router])

  return (
    <>
      {isLogged ? (
        <Loading open={isLogged} />
      ) : (
        <Box id="pr-app-root" component={'main'} className="main-layout-wrapper">
          {/* <MainHeader /> */}

          <Box id="pr-app-wrapper" className="app-wrapper">
            <MainSideBar />

            <Box className="app-main">{children}</Box>
          </Box>
        </Box>
      )}
    </>
  )
}
