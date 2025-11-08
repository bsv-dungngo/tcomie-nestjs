import { breadcrumbsState, openSidebarState } from '@/store/common'
import { BreadcrumbType } from '@/types'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Breadcrumbs, Button, IconButton, Toolbar } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { setRecoil } from 'recoil-nexus'
export const MainHeader = () => {
  const breadcrumbs = useRecoilValue(breadcrumbsState)

  // Mobile sidebar
  const handleOpeSideBar = () => {
    setRecoil(openSidebarState, true)
  }

  return (
    <>
      <AppBar id="pr-main-header" position="fixed" elevation={0} className="main-header-wrapper">
        <Toolbar>
          <Box className="main-header-wrapper--btn-menu">
            <IconButton size="small" edge="start" onClick={handleOpeSideBar}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
            {breadcrumbs.map((item: BreadcrumbType, i: number) => (
              <Button
                key={i}
                // disabled={isLastBreadcrumb(i)}
                size="small"
                // onClick={() => router.push(item.to)}
              >
                {item.name}
              </Button>
            ))}
          </Breadcrumbs>

          {/* <Avatar sx={{ height: '34px', width: '34px' }} /> */}
        </Toolbar>
      </AppBar>
    </>
  )
}
