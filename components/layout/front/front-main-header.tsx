import { brand } from '@/components/colors/brand'
import { MainContainer } from '@/components/container'
import { Close, Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'
import { t } from 'i18next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavChildren } from './nav-children'
import { NavChildrenMobile } from './nav-children-mobile'

export const FrontMainHeader = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const [isNavActived, setIsNavActived] = useState(false)

  const handleToggleNav = () => {
    setOpenNavigation(!openNavigation)
  }

  const handleNavActived = () => {
    if (Math.ceil(window.scrollY) >= 20) {
      setIsNavActived(true)
    } else {
      setIsNavActived(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setOpenNavigation(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavActived)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleNavActived)
      window.removeEventListener('resize', handleNavActived)
    }
  }, [])

  return (
    <>
      <AppBar className="front-header" elevation={0} position={openNavigation ? 'fixed' : 'sticky'}>
        <Toolbar disableGutters className={isNavActived ? 'front-nav-actived' : ''}>
          <MainContainer>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Box mt={1}>
                <Link href={t('linkFrHome') ?? ''}>
                  <img src="/images/logo.jpg" alt="" width="150px" />
                </Link>
              </Box>

              <Box display={{ xs: 'none', lg: 'flex' }}>
                <NavChildren setOpenNavigation={setOpenNavigation} />
              </Box>

              <Box display={{ xs: 'flex', lg: 'none' }} mt={2}>
                <Box>
                  <IconButton onClick={handleToggleNav} edge="end">
                    {openNavigation ? (
                      <Close sx={{ fontSize: '1.8rem', color: brand.dark }} />
                    ) : (
                      <Menu sx={{ fontSize: '1.8rem', color: brand.dark }} />
                    )}
                  </IconButton>
                </Box>
              </Box>
            </Stack>
          </MainContainer>
        </Toolbar>
      </AppBar>

      <NavChildrenMobile
        open={openNavigation}
        handleToggleNav={handleToggleNav}
        setOpenNavigation={setOpenNavigation}
      />
    </>
  )
}
