import { LangButton } from '@/components/button/lang-button'
import { brand } from '@/components/colors/brand'
import { ExpandMore } from '@mui/icons-material'
import { Box, Collapse, Divider, Drawer, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { NavItem, NavItemChild } from '../type'
import { navItems } from './nav-children'

interface IProps {
  setOpenNavigation: Dispatch<SetStateAction<boolean>>
  open: boolean
  handleToggleNav: () => void
}

export const NavChildrenMobile = ({ setOpenNavigation, open, handleToggleNav }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const router = useRouter()
  const serviceId = router.query.id ? +router.query.id : 0
  const pathName = usePathname()

  const handleClick = (item: NavItem, index: number) => {
    if (item.children.length > 0) {
      setCurrentIndex(index == currentIndex ? -1 : index)
    } else {
      router.push(item.link)
      setOpenNavigation(false)
    }
  }

  const handleClickChild = (navItem: NavItem, childItem: NavItemChild) => {
    router.push(`${navItem.link}/${childItem.id}`)
    setOpenNavigation(false)
  }

  const isActivedNav = (navItem: NavItem) => {
    if (pathName && pathName.includes(navItem.link)) {
      return 'front-nav-item-actived'
    }
    return ''
  }

  return (
    <Drawer
      anchor={'top'}
      open={open}
      onClose={handleToggleNav}
      PaperProps={{ className: 'navigation-mobile-drawer' }}
    >
      <Stack pt={11}>
        {navItems.map((navItem, index) => (
          <React.Fragment key={index}>
            <Stack
              onClick={() => handleClick(navItem, index)}
              className={`${isActivedNav(navItem)} front-nav-item`}
            >
              <Stack p={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography
                  fontWeight={600}
                  textTransform={'uppercase'}
                  className={`${isActivedNav(navItem)}`}
                >
                  {navItem.title}
                </Typography>

                {navItem.children.length > 0 && <ExpandMore />}
              </Stack>

              <Divider />
            </Stack>

            {navItem.children.length > 0 && (
              <Collapse in={currentIndex == index}>
                {navItem.children.map((child, index) => (
                  <Stack
                    key={index}
                    onClick={() => handleClickChild(navItem, child)}
                    className={`${+child.id == serviceId ? 'actived' : ''} `}
                    bgcolor={+child.id == serviceId ? brand.primaryLightest : ''}
                  >
                    <Typography p={2} pl={4} fontWeight={600}>
                      {child.title}
                    </Typography>
                    <Divider />
                  </Stack>
                ))}
              </Collapse>
            )}
          </React.Fragment>
        ))}
        <Box mx={'auto'} mt={2}>
          <LangButton />
        </Box>
      </Stack>
    </Drawer>
  )
}
