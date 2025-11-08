import { openSidebarState } from '@/store/common'
import { NavCpType } from '@/types/nav'
import { ArrowDropDown, Article, Groups } from '@mui/icons-material'
import ArticleIcon from '@mui/icons-material/Article'
import { Avatar, Box, Button, Drawer, Link, Menu, MenuItem, Stack } from '@mui/material'
import { removeCookies } from 'cookies-next'
import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import { CPPrimaryButton } from '../button/cp/cp-primary-button'

export const MainSideBar = () => {
  const openSidebar = useRecoilValue(openSidebarState)

  return (
    <>
      {/* Web show  */}
      <Box display={{ xs: 'none', lg: 'flex' }}>
        <SideBarChild />
      </Box>

      {/* mobile show  */}
      <Drawer anchor={'left'} open={openSidebar} onClose={() => setRecoil(openSidebarState, false)}>
        <Box border={1} borderColor={'#fff'}>
          <SideBarChild />
        </Box>
      </Drawer>
    </>
  )
}

const SideBarChild = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await sessionStorage.removeItem('flit_access_token')
    await removeCookies('flit_access_token')
    location.href = '/cp/auth/login'
  }

  const items: NavCpType[] = [
    {
      id: 'artice',
      icon: <Article />,
      label: 'Article',
      submenu: [],
      to: '/cp/article',
    },

    // {
    //   id: 'programming-courses',
    //   icon: <DeveloperMode />,
    //   label: 'Programming Courses',
    //   submenu: [],
    //   to: '/cp/programming-courses',
    // },

    // {
    //   id: 'japanese-courses',
    //   icon: <LocalLibrary />,
    //   label: 'Japanese Courses',
    //   submenu: [],
    //   to: '/cp/japanese-courses',
    // },

    {
      id: 'project',
      icon: <ArticleIcon />,
      label: 'Project',
      submenu: [],
      to: '/cp/project',
    },

    {
      id: 'contacts',
      icon: <Groups />,
      label: 'Contacts',
      submenu: [],
      to: '/cp/contact',
    },
    // {
    //   id: 'logout',
    //   icon: <Groups />,
    //   label: 'Logout',
    //   submenu: [],
    //   to: '/cp/logout',
    // },
  ]

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box id="pr-app-sidebar" className="side-bar-wrapper">
      <Stack
        className="side-bar-wrapper__logo"
        alignItems="center"
        justifyContent="center"
        mt={1}
        pl={0}
      >
        <Link href={'/vi/trang-chu/'}>
          <img src="/images/logo.jpg" alt="" width="100px" />
        </Link>
      </Stack>
      <Box
        className="app-sidebar-menu"
        height={{ xs: innerHeight - 100 + 'px', xl: 'calc(100vh - 100px)' }}
      >
        <Stack spacing={0.5} pt={0.5}>
          {items.map((menu: NavCpType, index: number) => {
            const isActived = router.pathname.includes(menu.to)
            return (
              <Button
                key={index}
                className={`${isActived ? 'btn-nav-actived' : 'btn-nav-inactive'}`}
                startIcon={menu.icon}
                onClick={() => router.push(menu.to)}
                size="small"
              >
                {menu.label}
              </Button>
            )
          })}
        </Stack>
      </Box>

      <Box py={1} px={2} width={'100%'} position={'absolute'} bottom={0} left={0}>
        <CPPrimaryButton
          variant="outlined"
          color="inherit"
          fullWidth
          className="btn-admin-footer"
          endIcon={<ArrowDropDown />}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar sx={{ height: '28px', width: '28px' }}>SA</Avatar>
          <strong>Supper Admin</strong>
        </CPPrimaryButton>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        className="menu-profile-footer"
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}
