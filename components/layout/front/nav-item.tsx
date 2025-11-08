import { brand } from '@/components/colors/brand'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import { NavItem, NavItemChild } from '../type'

interface IProps {
  navItem: NavItem
  setOpenNavigation: Dispatch<SetStateAction<boolean>>
  index: number
}

export const NavMainItem = ({ navItem, setOpenNavigation, index }: IProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const [onMouseEnter, setMouseEnter] = useState(false)

  // Handle routing item
  const handleRouting = (item: NavItem) => {
    router.push(item.link)
    setOpenNavigation(false)
  }

  // Handle navigation
  const handleChangeLink = (navItem: NavItem, child: NavItemChild) => {
    router.push(`${navItem.link}/${child.id}`)
  }

  const isActivedNav = () => {
    if (pathName && pathName.includes(navItem.link)) {
      return 'front-nav-item-actived'
    }
    return ''
  }

  return (
    <Box position={'relative'} className="item-nav-wrapper">
      <Button
        className={`${isActivedNav()} front-nav-item`}
        onClick={() => handleRouting(navItem)}
        endIcon={
          navItem.children?.length > 0 ? (
            onMouseEnter ? (
              <ExpandLess sx={{ color: brand.dark }} />
            ) : (
              <ExpandMore sx={{ color: brand.dark }} />
            )
          ) : (
            ''
          )
        }
      >
        {navItem.title}
      </Button>

      {navItem.children?.length > 0 && (
        <Box
          className="menu-drop-down"
          onMouseEnter={() => {
            setMouseEnter(true)
          }}
          onMouseLeave={() => {
            setMouseEnter(false)
          }}
        >
          <Stack className="menu-drop-down__content">
            {navItem.children.map((child, index) => {
              const queryID = router.query.id ? `${navItem.link}-${+router.query.id}` : 0
              const childId = `${navItem.link}-${child.id}`

              return (
                <Stack
                  key={index}
                  className={`${childId == queryID ? 'actived' : ''} menu-drop-down__item`}
                  onClick={() => handleChangeLink(navItem, child)}
                >
                  <Typography fontWeight={600}>{child.title}</Typography>
                  {navItem.children.length > index + 1 ? <Divider /> : ''}
                </Stack>
              )
            })}
          </Stack>
        </Box>
      )}
    </Box>
  )
}
